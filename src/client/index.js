import React from 'react';
import ReactDOM from 'react-dom';
import FluxibleContext from 'fluxible-context';
import Fluxible from 'fluxible';
import fetchrPlugin from 'fluxible-plugin-fetchr';
import App from './App';
import { UsernameStore } from '../stores';

const fetchr = fetchrPlugin();

const fluxible = new Fluxible();
fluxible.registerStore(UsernameStore);
fluxible.plug(fetchr);

fluxible.rehydrate(window.App, (err, context) => {
  window.context = context;
  ReactDOM.render((
    <FluxibleContext.Provider value={context.getComponentContext()}>
      <App />
    </FluxibleContext.Provider>
  ), document.getElementById('root'));
});
