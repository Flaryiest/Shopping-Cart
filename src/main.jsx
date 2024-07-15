import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import App from './components/App.jsx'
import Shop from "./components/Shop.jsx"
import Checkout from "./components/Checkout.jsx"
import './styles/index.css'

const router = createBrowserRouter([
  {path: "/",
    element: <App />,
    children: [
      {path: "shop", element: <Shop/>},
      {path: "checkout", element: <Checkout/>}
    ]
  },
  {path: "/shop",
    element: <Shop/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
