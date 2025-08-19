import { Link, NavLink } from 'react-router-dom'
import { IoBookSharp } from "react-icons/io5";

export default function Navbar(){
  const active = ({isActive}) => 
    isActive 
      ? 'text-yellow-300 font-semibold'   // Active link highlight
      : 'text-white hover:text-gray-300'  // Normal links

  return (
    <nav className="sticky top-0 z-40 bg-blue-900 border-b border-blue-800">
      <div className="container mx-auto max-w-6xl flex items-center justify-between p-3">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg text-black-300 hover:text-brown-500">
          <span className="text-2xl"><IoBookSharp /></span> LMS
        </Link>
        <div className="flex items-center gap-4">
          <NavLink to="/" className={active}>Home</NavLink>
          <NavLink to="/books" className={active}>Browse Books</NavLink>
          <NavLink 
            to="/add" 
            className={({isActive}) => 
              (isActive
                ? 'bg-yellow-400 text-blue-900 font-semibold'
                : 'bg-blue-600/90 hover:bg-blue-600 text-white'
              ) + ' px-3 py-1.5 rounded-2xl shadow-sm transition'}
          >
            Add Book
          </NavLink>
        </div>
      </div>
    </nav>
  )
}
