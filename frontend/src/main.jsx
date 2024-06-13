import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import MediaContextProvider from './Context/MediaContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MediaContextProvider>
      <App />
    </MediaContextProvider>
  </React.StrictMode>
)
