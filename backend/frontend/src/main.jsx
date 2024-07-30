import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import {createBrowserRouter, createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'

// Pages
import App from './App.jsx'
import Home from './pages/Home/Home.jsx'
import About from "./pages/About/About.jsx";
import NotFound from './pages/NotFound/NotFound.jsx'
import Food from './pages/Food/Food.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index={true} path='/' element={<Home/>}/>
			<Route  path='/about' element={<About/>}/>
      <Route  path='/food' element={<Food/>}/>
			<Route  path='*' element={<NotFound/>}/>

    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>


  </React.StrictMode>,
)
