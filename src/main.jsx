import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'; // or whatever your Tailwind CSS file is
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from './App.jsx'
import EarthScene from './components/earthScene.jsx';
import Planets from './components/planets.jsx';
import Layout from './components/layout.jsx';
import Galaxies from './components/galaxies.jsx';
import Stars from './components/stars.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <EarthScene />
      },
      {
        path: 'planets',
        element: <Planets />
      },
      {
        path: 'galaxies',
        element: <Galaxies />
      },
      {
        path: 'stars',
        element: <Stars />
      }


    ]


  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
