import 'zone.js/dist/zone-node';

import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { join } from 'path';

import { AppServerModule } from './src/main.server';
import { APP_BASE_HREF } from '@angular/common';
import { existsSync } from 'fs';
import * as cors from 'cors';
import * as nodemailer from 'nodemailer';

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const distFolder = join(process.cwd(), 'dist/reiki/browser');
  const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
  server.engine('html', ngExpressEngine({
    bootstrap: AppServerModule,
  }));

  server.set('view engine', 'html');
  server.set('views', distFolder);

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get('*.*', express.static(distFolder, {
    maxAge: '1y'
  }));

  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    res.render(indexHtml, { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });
  });

  server.use(cors({ origin: '*'}));
  server.use(express.json());
  server.use(express.urlencoded({
    extended: true
  }));

  server.post('/sendmail', (req, res) => {
    console.log('request arrive');
    let data = req.body;
    sendMail(data, info => {
        console.log('le message à été envoyé');
        res.send(info);
    });
});

  // server.use(express.static(__dirname + '/dist/reiki'));
  // server.get('/*', function(req,res) {    
  //   res.sendFile(path.join(__dirname+'/dist/reiki/index.html'));
  // });

  

  return server;
}

async function sendMail(data, callback) {

  let transporter = nodemailer.createTransport({
      host: 'ssl0.ovh.net',
      port: 587,
      secure: true,
      auth : {
          user: 'contact@reiki49.fr',
          pass: 'azerty28ZFGI',
      },
  });
  let mailOptions = await transporter.sendMail({
      from: data.email,
      to: 'contact@reiki49.fr', // list of receivers
      subject: 'reiki', // Subject line
      text: "Hello world?", // plain text body
      html: '<div><ul><li>nom :'+ data.nom +'</li><li>prenom :'+ data.prenom +'</li><li>email :'+ data.email +'</li><li>telephone :'+ data.telephone +'</li><li>sujet :'+ data.sujet +'</li><li>message :'+ data.message +'</li></ul></div>', // html body
  });
  

  let info = await transporter.sendMail(mailOptions);
  callback(info);
}

function run(): void {
  const port = process.env.PORT || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';
