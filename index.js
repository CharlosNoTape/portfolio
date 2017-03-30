const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const app = express();

var db = new sqlite3.Database('database.db');

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
	res.render('index', {title: 'Home'});
});

app.listen(3000, () => {
	console.log('Listening at 192.168.83.128:3000...');
});