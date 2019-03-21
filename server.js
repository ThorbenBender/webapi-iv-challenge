const express = require('express');
const path = require('path');
const pathToBuildFolder = path.join(__dirname, 'build');
const pathToIndexHtml = path.join(__dirname, 'build', 'index.html');

const app = express();

app.use(express.static(pathToBuildFolder));

app.get('/', (req, res) => {
	res.sendFile(pathToIndexHtml);
});

module.exports = app;
