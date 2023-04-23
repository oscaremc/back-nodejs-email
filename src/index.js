const express = require('express');
const app = express();
const path = require('path');
const route = require('./routes/index');
const cors = require('cors');

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: false}));
app.use(express.json());

const allowedOrigins = ['http://localhost:4200', 'https://oscaremc.com/home'];
const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 200,
};
// Manejador de solicitudes OPTIONS
app.options('*', cors(corsOptions));

app.use(cors(corsOptions));

app.use("/", route);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
  });