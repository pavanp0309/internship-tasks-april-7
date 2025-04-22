import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "/node_modules/bootstrap/dist/css/bootstrap.css"
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop.jsx'
import { AuthProvider } from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(

    <BrowserRouter>
      <AuthProvider>
        <App/>  
      </AuthProvider>
    </BrowserRouter>

)
