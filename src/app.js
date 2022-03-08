const { join } = require('path');
const express = require('express');
const router = require('./routes/route');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, '../public')));
app.set('port', process.env.PORT || 8000);
app.use(router);

module.exports = app;
