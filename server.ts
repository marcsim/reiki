import 'zone.js/dist/zone-node';

import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { join } from 'path';
import * as nodemailer from 'nodemailer';
import { AppServerModule } from './src/main.server';
import { APP_BASE_HREF } from '@angular/common';
import { existsSync } from 'fs';
import * as cors from 'cors';
import { google } from 'googleapis';
import * as SMTPTransport from "nodemailer/lib/smtp-transport";

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const router = express.Router();
  const distFolder = join(process.cwd(), 'dist/reiki/browser');
  const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';
  server.use(express.json());
  server.use(express.urlencoded({
    extended: true
  }));
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

  server.use(cors({ origin: ['https://www.reiki49.fr']})); //['http://localhost:4200']
  server.use(express.json());
  server.use(express.urlencoded({
    extended: true
  }));

  return server;
}

async function sendMail(data, callback) {
  const CLIENT_ID = '782836476467-top9nrf42hdq17tuudsk9dcjre00euol.apps.googleusercontent.com';
  const CLIENT_SECRET = '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';
  const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
  const REFRESH_TOKEN = '1//04rEcbQMTw9q-CgYIARAAGAQSNwF-L9IrRcAjLz7iQ0XcOW5KrqegAV4GmzKIqv4vhtGxYSRzGxakzEY_s_r7GJFYhBkAcJS2DL4';
  const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
  const accessToken = await oAuth2Client.getAccessToken();
  oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN});

  const transport = nodemailer.createTransport({
    host: 'smtp.google.com',
    port: 465,
    secure: true,
    auth: {
      type: 'OAuth2',
      user: 'marcantoine495@gmail.com',
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      refreshToken: REFRESH_TOKEN,
      accessToken: String(accessToken)
    }
  });
  let mailOptions = await transport.sendMail({
    from: data.email,
    to: 'contact@reiki49.fr', // list of receivers
    subject: 'reiki', // Subject line
    text: "Hello world?", // plain text body
    html: '<div><ul><li>nom :'+ data.nom +'</li><li>prenom :'+ data.prenom +'</li><li>email :'+ data.email +'</li><li>telephone :'+ data.telephone +'</li><li>sujet :'+ data.sujet +'</li><li>message :'+ data.message +'</li></ul></div>', // html body
  });

    let info = await transport.sendMail(mailOptions);
    callback(info);
}

function run(): void {
  const port = process.env.PORT || 4000;
  // Start up the Node server
  const server = app();
  //Server listen prod
  // server.listen(4000, "152.228.173.68");
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });

  // server.post('/sendmail', (req, res) => {
  server.post('/', (req, res) => {
    console.log('request arrive');
    let data = req.body;
    // console.log('req', req);
    // console.log('data', data);
    sendMail(data, info => {
        // console.log('le message à été envoyé');
        res.send(info);
    });
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
