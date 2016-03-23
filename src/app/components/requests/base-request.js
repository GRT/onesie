import https from 'https';
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
      'rejectUnauthorized': false,
      'Content-Type' : 'text/plain',
      'Authorization': 'Basic '+ config.token,
      'Access-Control-Allow-Origin': 'http://127.0.0.1:8080'
    }
  };

  https.get(opts, (res) => {
    let body = '';
    res.on('data', (buf) => { body += buf; });
    res.on('end', () => { callback(body); });
  });

};

export { doGet };