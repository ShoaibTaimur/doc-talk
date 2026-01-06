import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import App from './App'
import Home from './Components/Home/Home'
import MyBookings from './Components/MyBookings/MyBookings'
import Blogs from './Components/Blogs/Blogs'
import Contact from './Components/Contact/Contact'

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        index: true,
        path: '/',
        loader:()=>fetch("docInfo.json"),
        Component: Home
      },
      {
        path:'/my-bookings',
        Component: MyBookings
      },
      {
        path:'/blogs',
        Component: Blogs
      },
      {
        path:'/contact-us',
        Component: Contact
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
