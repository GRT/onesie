import http from 'http';
import config from '../../../../config';

const doGet = function doGet(err, path, callback) {
  const opts = {
    host : config.host,
    port : config.port,
    path : path
  };

  http.get(opts, (res) => {
    let body = '';
    res.on('data', (buf) => { body += buf; });
    res.on('end', () => { callback(body); });
  });

};

export { doGet };