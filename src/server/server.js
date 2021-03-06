import React from 'react';
import express from 'express';
import os from 'os';
import { renderToString } from 'react-dom/server';
import FluxibleContext from 'fluxible-context';
import Fluxible from 'fluxible';
import fetchrPlugin from 'fluxible-plugin-fetchr';
import logger from '@porch/logger';
import App from '../client/App';
import { UsernameStore } from '../stores';

const fetchr = fetchrPlugin({
  xhrPath: '/api' // Path for XHR to be served from
});

const fluxible = new Fluxible();
fluxible.registerStore(UsernameStore);
fluxible.plug(fetchr);

const app = express();

app.use(express.static('dist'));
fetchr.registerService({
  name: 'username',
  read: (req, resource, params, config, cb) => {
    cb(null, os.userInfo().username);
  }
});
app.use(fetchr.getXhrPath(), fetchr.getMiddleware());

app.get('/', (req, res) => {
  logger.trace({ req, res }, 'get');
  const context = fluxible.createContext();

  res.send(`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>DCS Editor</title>
    </head>
    
    <body>
      <script type="application/javascript">window.App=${JSON.stringify(context.dehydrate())}</script>
      <div id="root">${renderToString(<FluxibleContext.Provider value={context.getComponentContext()}><App /></FluxibleContext.Provider>)}</div>
      <script type="application/javascript" src="http://localhost:3000/bundle.js"></script>
    </body>
    
    </html>`);
});
app.listen(8080, () => console.log('Listening on port 8080!'));
