import Home from './components/Home'
import User from './components/User'
import Product from './components/Products'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/user' element={<User/>}/>
      <Route path='/products' element={<Product/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
