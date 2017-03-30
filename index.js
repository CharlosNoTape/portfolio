const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
	res.render('index');
});

app.listen(3000, () => {
	console.log('Listening at 192.168.83.128:3000...');
});