import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <ChakraProvider>
    <Navbar/>
    <Routes>
      <Route path='/' element={<App />}></Route>
    </Routes>
    </ChakraProvider>
  </Router>
 
)
