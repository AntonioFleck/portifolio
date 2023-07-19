import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import ErrorPage from './routes/ErrorPage/ErrorPage.jsx'

import Home from './routes/Home/Home.jsx'
import About from './routes/About/About.jsx'
import Projects from './routes/Projects/Projects.jsx'

const router = createBrowserRouter ([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
      element: <Home />
    },
    {
      path: '/about-me',
      element: <About />
    },
    {
      path: '/projects',
      element: <Projects />
    }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
