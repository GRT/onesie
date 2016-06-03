import config from '../../../../config';

const doGet = function doGet(err, path, callback) {
  const r = new XMLHttpRequest();
  const url = config.protocol + '//' + config.host + ':' + config.port + path;
  r.open('GET', url, true);
  r.onreadystatechange = () => {
    if (r.readyState != 4 || r.status != 200) { return; }
    callback(JSON.parse(r.responseText));
  };
  r.send();
};

export { doGet };