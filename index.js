const express = require('express');
const path = require('path');     //used for file path
const app = module.exports = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || process.env.NODE_PORT || 3000;
const listen = process.env.NODE_IP || '0.0.0.0';
app.listen(port, listen, (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log('Listening on port ' + port + '...');
    }
});
