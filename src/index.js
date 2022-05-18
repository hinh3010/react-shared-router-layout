import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GolobalStyles from '~/components/GlobalStyles'

const root = ReactDOM.createRoot(document.getElementById('xuan_hinh'));
root.render(
  <React.StrictMode>
    <GolobalStyles>
      <App />
    </GolobalStyles>
  </React.StrictMode>
);

