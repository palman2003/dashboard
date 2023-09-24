import Home from './components/Home'
import User from './components/User'
import Product from './components/Products'
import Navbar from './components/Navbar'
import './App.css'
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Menu from './components/Menu'
import './styles/global.scss'
//import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  const Layout=()=>{
    return(
      <div className='page'>
        <Navbar/>
        <div className='innerpage'>
          <div className="menu"><Menu/></div>
          <div className="content"><Outlet/></div>
        </div>
        <Footer/>
      </div>
    )
  }
  const router=createBrowserRouter([
    {
     path:'/',
     element:<Layout/>,
     children:[
      {
        path:'/',
        element:<Home/>,
      },
      {
        path:'user',
        element:<User/>,
      },
      {
        path:'product',
        element:<Product/>,
      },

    ]
    },
  ]);
  
  return (
    <RouterProvider router={router}/>
  )
}

export default App
