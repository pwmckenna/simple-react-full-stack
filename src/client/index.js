import React from 'react';
import ReactDOM from 'react-dom';
import FluxibleContext from 'fluxible-context';
import Fluxible from 'fluxible';
import App from './App';

const fluxible = new Fluxible();

ReactDOM.render((
  <FluxibleContext.Provider value={fluxible.createContext().getComponentContext()}>
    <App />
  </FluxibleContext.Provider>
), document.getElementById('root'));
