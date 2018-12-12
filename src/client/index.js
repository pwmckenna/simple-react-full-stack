import React from 'react';
import ReactDOM from 'react-dom';
import FluxibleContext from 'fluxible-context';
import Fluxible from 'fluxible';
import fetchr from '../fetchr';
import App from './App';
import { UsernameStore } from '../stores';

const fluxible = new Fluxible();
fluxible.registerStore(UsernameStore);
fluxible.plug(fetchr);

const context = fluxible.createContext();
window.context = context;
ReactDOM.render((
  <FluxibleContext.Provider value={context.getComponentContext()}>
    <App />
  </FluxibleContext.Provider>
), document.getElementById('root'));
