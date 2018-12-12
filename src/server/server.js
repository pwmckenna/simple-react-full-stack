import express from 'express';
import os from 'os';
import fetchr from '../fetchr';

const app = express();

app.use(express.static('dist'));
fetchr.registerService({
  name: 'username',
  read: (req, resource, params, config, cb) => {
    cb(null, os.userInfo().username);
  }
});
app.use(fetchr.getXhrPath(), fetchr.getMiddleware());
app.listen(8080, () => console.log('Listening on port 8080!'));
