import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import LoadingProvider from './contexts/LoadingContext.tsx'
import NotificationProvider from './contexts/NotificationContext.tsx'
import NocompleteProvider from './contexts/Nocomplete.tsx'
import CorrectAnswerNoProvider from './contexts/CorrectAnswerNo.tsx'
import WrongAnswerNoProvider from './contexts/WrongAnswerNo.tsx'
import AppWithErrorBoundary from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LoadingProvider>
      <NotificationProvider>
        <NocompleteProvider>
          <CorrectAnswerNoProvider>
            <WrongAnswerNoProvider>
              <AppWithErrorBoundary />
            </WrongAnswerNoProvider>
          </CorrectAnswerNoProvider>
        </NocompleteProvider>
      </NotificationProvider>
    </LoadingProvider>
  </React.StrictMode>,
)
