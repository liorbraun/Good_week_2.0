import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DBContextProvider } from './context/SheetParsing';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DBContextProvider>
        <App />
    </DBContextProvider>
  </React.StrictMode>
);