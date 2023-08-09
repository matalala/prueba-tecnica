import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {store} from './sotre'
import { Auth0Provider } from '@auth0/auth0-react';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* componente Provider para poder utilizar el estado de redux  */}
    <Provider store={store}>
      {/* componente  Auth0Provider en este creamos la configuracion de
      auth0 para poder utilizarlo */}
      <Auth0Provider
        domain="dev-wv4ua6klgb35rnb6.eu.auth0.com"
        clientId="Adf3Jbj8Lu2yR4CtMgkRKGFk7knCMSX4"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
        <App />
      </Auth0Provider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
