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
    path: "/Profile/",
    element: <App/>,
    children: [
      {
        path: "/Profile/",
        element: <Home/>
      },
      {
        path: "/Profile/about",
        element: <About/>
      },
      {
        path: "/Profile/skills",
        element: <Skills/>
      },
      {
        path: "/Profile/contact",
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