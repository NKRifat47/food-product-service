const express = require('express');
const cors = require('cors');

const router = require('./app/routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', router);

app.get("/", (req, res) => {
  res.send("Food Product Service Running...");
});

module.exports = app;