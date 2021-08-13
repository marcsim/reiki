const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');

// const details = require('./details.json');

const app = express();
app.use(cors({ origin: '*'}));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(express.static(__dirname + '/dist/reiki'));

app.get('/*', function(req,res) {    
    res.sendFile(path.join(__dirname+'/dist/reiki/index.html'));
});

app.listen(process.env.PORT || 8080);

app.post('/sendmail', (req, res) => {
    console.log('request arrive');
    let data = req.body;
    sendMail(data, info => {
        console.log('le message à été envoyé');
        res.send(info);
    });
});

async function sendMail(data, callback) {

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth : {
            user: 'marcantoine495@gmail.com',
            pass: 'azerty28ZFGI',
        },
    });
    let mailOptions = await transporter.sendMail({
        from: 'reiki adresse', // sender address
        to: 'marc-antoine.simon3@orange.fr', // list of receivers
        subject: 'reiki', // Subject line
        text: "Hello world?", // plain text body
        html: '<div><ul><li>nom :'+ data.nom +'</li><li>prenom :'+ data.prenom +'</li><li>email :'+ data.email +'</li><li>telephone :'+ data.telephone +'</li><li>sujet :'+ data.sujet +'</li><li>message :'+ data.message +'</li></ul></div>', // html body
    });
    

    let info = await transporter.sendMail(mailOptions);
    callback(info);
}