import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter if needed
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client


const rootElement = document.getElementById('root');

// Use createRoot from "react-dom/client" to render your app
const root = createRoot(rootElement); // Use createRoot here

root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

