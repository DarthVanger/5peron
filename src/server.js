const https = require('https')
const fs = require('fs')
const express = require('express')
const app = express()
const port = 443

app.use(express.static('build'))

var privateKey = fs.readFileSync( 'key.pem' );
var certificate = fs.readFileSync( 'cert.pem' );

https.createServer({
            key: privateKey,
            cert: certificate
}, app).listen(port);
