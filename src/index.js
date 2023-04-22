const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(require('./routes/index'));

app.use(express.static(path.join(__dirname, 'public')));

app.set('port', process.env.PORT || 4000);
console.log('Servidor conectado', app.get('port'));