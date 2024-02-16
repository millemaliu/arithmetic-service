const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const { add, subtract, divide, multiply } = require("./arithmetica");

const port = 3000;


app.get('/', (req, res) => {
    res.send('Arithmetic service - Hello World!')
});


app.get('/add/:n/:m', (req, res) => {
    res.json(add(Number(req.params.n), Number(req.params.m)));
});


app.get('/subtract/:n/:m', (req, res) => {
    res.json(subtract(Number(req.params.n), Number(req.params.m)));
});


app.get('/multiply/:n/:m', (req, res) => {
    res.json(multiply(Number(req.params.n), Number(req.params.m)));
});


app.get('/divide/:n/:m', (req, res) => {
    res.json(divide(Number(req.params.n), Number(req.params.m)));
});



app.listen(port);
