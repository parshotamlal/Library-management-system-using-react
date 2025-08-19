import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from '../pages/Footer'
import ToastHost from './ToastHost'
function Layout(){
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="container mx-auto w-full max-w-6xl flex-1 p-4 sm:p-6">
        <Outlet />
      </main>
      < Footer />
      <ToastHost />
    </div>
  )
}
export {Layout}