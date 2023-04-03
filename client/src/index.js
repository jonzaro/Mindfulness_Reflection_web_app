import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter ,  BrowserRouter } from 'react-router-dom'
import UserProvider from './context/UserProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </HashRouter>
  </React.StrictMode>
);
