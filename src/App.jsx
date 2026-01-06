import { Outlet } from 'react-router'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { Suspense } from 'react'

function App() {
  return (
    <>
      <Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </Suspense>
    </>
  )
}

export default App
