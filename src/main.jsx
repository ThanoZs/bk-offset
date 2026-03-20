/**
 * main.jsx — Application entry point for BK Offset Printing.
 * Initializes the React DOM tree and provides the head manager context.
 */

import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'

// Importing global design foundations
import './styles/animations.css'
import './styles/utilities.css'
import './index.css'
import './App.css'

/**
 * Root Initializer — Renders the application into the #root element.
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
)
