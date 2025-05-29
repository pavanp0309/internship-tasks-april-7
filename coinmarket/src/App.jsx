import React from 'react'
import CryptoTable from './components/crypto/components/cryptotables/CryptoTable'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword'
// import CryptoFilterCard from './components/crypto/components/cryptocards/CryptoFilterCard'
// import BestCryptoStats from './components/crypto/components/cryptostats/BestCryptoStats'

const App = () => {

  return (
   <>
   {/* <CryptoTable/> */}
   <Login/>
   <Register/>
   <ForgotPassword/>
   
    
    {/* <CryptoFilterCard/> */}
    {/* <BestCryptoStats/> */}
   </>
  )
}

export default App
