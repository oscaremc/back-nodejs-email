const express = require('express');
const app = express();
const path = require('path');
const route = require('./routes/index');
const cors = require('cors');

const PORT = process.env.PORT ?? 3000;

app.use(cors());

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get("/", async (req, res) => {
  res.status(200).contentType('text/plain').send(`WELCOME`);
});

app.get("/send-email", route);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
  });