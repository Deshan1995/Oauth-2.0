const express = require('express');
const bodyParser = require('body-parser');
const nocache = require('nocache');

const app = express();

const PORT = 3002;


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(nocache());

const CLIENT_ID = "217790754539-clteqqopgk8j355djl2j8htpnf2tqg1o.apps.googleusercontent.com";
const CLIENT_SECRET = "T7cD-f7XjAWTguMdePKrKD_-";
const API_KEY = "AIzaSyDCL_sDDu7YCs8Oy-FV3u994iYTAUijshI";

// Start server
app.listen(PORT, () => {
    console.log(`OAuth 2.0 Demo Started On ${PORT}`);
});

// Load login
app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname});
});
