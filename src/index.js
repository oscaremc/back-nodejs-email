const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// Configurar sistema de logs
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo salió mal!');
});

app.use(require('./routes/index'));

app.use(express.static(path.join(__dirname, 'public')));

app.set('port', process.env.PORT || 4000);
console.log('Servidor conectado', app.get('port'));

