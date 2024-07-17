import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import LoadingProvider from './contexts/LoadingContext.tsx'
import NotificationProvider from './contexts/NotificationContext.tsx'
import NocompleteProvider from './contexts/Nocomplete.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LoadingProvider>
      <NotificationProvider>
        <NocompleteProvider>
        <App />
        </NocompleteProvider>
      </NotificationProvider>
    </LoadingProvider>
  </React.StrictMode>,
)
