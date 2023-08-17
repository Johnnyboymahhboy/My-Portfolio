import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Skills from './Pages/Skills.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/Portfolio/",
    element: <App/>,
    children: [
      {
        path: "/Portfolio/",
        element: <Home/>
      },
      {
        path: "/Portfolio/about",
        element: <About/>
      },
      {
        path: "/Portfolio/skills",
        element: <Skills/>
      },
      {
        path: "/Portfolio/contact",
        element: <Contact/>
      },
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)