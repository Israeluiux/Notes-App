import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles.css';
import './index.css';
import { AuthProvider } from './Auth/AuthContext';
import { AppProvider } from './States/AppContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
     <AuthProvider>
      <AppProvider>
        <App />
      </AppProvider>
     </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);