// Install express server
const express = require('express');
const path = require("path");

const app = express();

// Serve only the static files from the dist directory
app.user(express.static('./dist/social-login'));

app.get('/*', (req, res) => 
    res.sendFile('index.html', {root: 'dist/angular-heroku/'}),
),

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);