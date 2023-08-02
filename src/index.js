const express = require('express');
const app = express();
const path = require('path');
const route = require('./routes/index');
const cors = require('cors');

const PORT = process.env.PORT ?? 3000;

app.use(cors());

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use("/", route);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
  });