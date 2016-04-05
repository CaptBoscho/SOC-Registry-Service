const express = require('express');
const app = module.exports = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use('/', (req, res) => {
    res.send('Hello world');
});

const port = process.env.PORT || process.env.NODE_PORT || 3000;
const listen = process.env.NODE_IP || '0.0.0.0';
app.listen(port, listen, (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log('Listening on port ' + port + '...');
    }
});
