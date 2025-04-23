import React from 'react'
import { Route,createRoutesFromElements, createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './Layout/RootLayout'
import Home from './pages/Home'
import About from './pages/About'
import ContactLayout from './Layout/ContactLayout'
import ContactInfo from './components/ContactInfo'
import ContactForm from './components/ContactForm'
import PageNotFound from './pages/PageNotFound'
import Features from './pages/Features'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactLayout />}>
            <Route path='info' element={<ContactInfo />} />
            <Route path='form' element={<ContactForm />} />        
        </Route>
        <Route path="features" element={<Features />}>
        </Route>
        <Route path="*" element={<PageNotFound />} />
        
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
