import Fluxible from 'fluxible';
import FluxibleContext from 'fluxible-context';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import fetchrPlugin from 'fluxible-plugin-fetchr';
import App from './App';

const fluxible = new Fluxible();

fluxible.plug(fetchrPlugin({
  xhrPath: '/api' // Path for XHR to be served from
}));

ReactDOM.render((
  <FluxibleContext.Provider value={fluxible.createContext().getActionContext()}>
    <Suspense fallback={<div>loading...</div>}>
      <App />
    </Suspense>
  </FluxibleContext.Provider>
), document.getElementById('root'));
