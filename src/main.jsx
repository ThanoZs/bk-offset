import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import logoImg from './assets/Logo/BK_logo_png.png'

// Set favicon to project logo at runtime (replaces default vite icon)
const setFavicon = (src) => {
  const link = document.querySelector("link[rel~='icon']");
  if (link) link.href = src;
  else {
    const l = document.createElement('link');
    l.rel = 'icon';
    l.href = src;
    document.head.appendChild(l);
  }
};
setFavicon(logoImg);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
