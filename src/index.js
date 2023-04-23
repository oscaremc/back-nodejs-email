const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const route = require('./routes/index');

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: false}));
app.use(express.json());

const allowedOrigins = ['http://localhost:4200/home', 'https://oscaremc.com/home'];
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

app.use(cors(corsOptions));

app.options('*', cors(corsOptions));

app.use("/", route);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
  });