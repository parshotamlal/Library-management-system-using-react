import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import ToastHost from './ToastHost'
function Layout(){
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="container mx-auto w-full max-w-6xl flex-1 p-4 sm:p-6">
        <Outlet />
      </main>
      <footer className="border-t border-gray-200/60 dark:border-gray-800 text-xs text-gray-500 p-4 text-center">
        <div>
            <span>
                hello
            </span>
            <span>
                hello
            </span>
            <span>
                hello
            </span>
        </div>
      </footer>
      <ToastHost />
    </div>
  )
}
export {Layout}