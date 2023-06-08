import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import MovieAppProvider from './context/MovieContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MovieAppProvider>
      <App />
    </MovieAppProvider>
  </React.StrictMode>
)
