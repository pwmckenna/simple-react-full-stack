import express from 'express';
import os from 'os';
import fetchr from '../fetchr';

const app = express();
app.use(express.static('dist'));
fetchr.registerService({
  name: 'userInfo',
  read: (req, resource, params, config, callback) => {
    callback(null, os.userInfo());
  }
});
app.use(fetchr.getXhrPath(), fetchr.getMiddleware());

app.listen(8080, () => console.log('Listening on port 8080!'));
