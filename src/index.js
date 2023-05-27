import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css";
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';
import config from './assets/Config';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={config}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
