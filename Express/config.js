const process = require('process');
require('dotenv').config();

let hostname = process.argv[2];
let port = process.argv[3];

if(!hostname) {
    hostname = process.env.NODE_HOST || '127.0.0.1';
}


if(!port) {
    port = process.env.NODE_PORT || 3000;
}

module.exports.hostname = hostname;
module.exports.port = port;