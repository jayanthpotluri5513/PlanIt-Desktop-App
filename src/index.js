import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client'
import './index.css';
import App from './App';
import {AuthContextProvider} from './context/AuthContext';
// Create a root for the app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
