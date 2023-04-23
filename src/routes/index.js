const { Router } = require('express');
const router = Router();
require('dotenv').config();

const nodemailer = require('nodemailer');

router.get('/', async (req, res) => {
    
});

router.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    contentHTML = `
        <h1>Formulario del portafolio</h1>
        <h3>Mensaje automatico</h3>
        <hr>
        <ul>
            <li>Username: ${name}</li>
            <li>User Email: ${email}</li>
        </ul>
        <p>${message}</p>
        <hr>
        <h6>Creado por Oscar Montalvo</h6>
    `;

    let transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    let info = await transporter.sendMail({
        from: `"Formulaio Portafolio" <${process.env.EMAIL_USER}>`, // sender address,
        to: process.env.EMAIL_TO,
        subject: 'Formulario Portafolio - Mensaje automatico',
        // text: 'Hello World'
        html: contentHTML
    })
    console.log(req.body);
    console.log('Message sent: %s', info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

    res.send('Recibido');
});

module.exports = router;