import https from 'https';
import http from 'http';
import config from '../../../../config';

const doGet = function doGet(err, path, callback) {
  const opts = {
    host : config.host,
    protocol : config.protocol,
    port : config.port,
    path : path,
    crossDomain: true,
    headers: {
      'json': true,
      //'rejectUnauthorized': false,
      'Content-Type' : 'text/plain',
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Origin' : '*',
      //'Authorization': 'Basic '+ config.token,
    }
  };

  const req = function req(res) {
    let body = '';
    res.on('data', (buf) => { body += buf; });
    res.on('end', () => { callback(body); });
  };

  if (config.protocol === 'https:') {
    https.get(opts, req);
  } else {
    console.log( config.protocol );
    http.get(opts, req);
  }
};

export { doGet };