import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './globals.css'
import UserProvider from './shared/lib/providers/UserProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <UserProvider>
    <App />
  </UserProvider>
  // </React.StrictMode>,
)
