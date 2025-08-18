import { Link, NavLink } from 'react-router-dom'
import {ThemeToggle} from './ThemeToggle'

export default function Navbar(){
  const active = ({isActive}) => isActive ? 'text-blue-600 dark:text-blue-400 font-semibold' : 'text-gray-700 dark:text-gray-300'
  return (
    <nav className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-gray-950/60 border-b border-gray-200/60 dark:border-gray-800">
      <div className="container mx-auto max-w-6xl flex items-center justify-between p-3">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg">
          <span className="text-2xl">📚</span> Online Library
        </Link>
        <div className="flex items-center gap-4">
          <NavLink to="/" className={active}>Home</NavLink>
          <NavLink to="/books" className={active}>Browse Books</NavLink>
          <NavLink to="/add" className={({isActive}) => (isActive?'bg-blue-600 text-white':'bg-blue-600/90 hover:bg-blue-600 text-white') + ' px-3 py-1.5 rounded-2xl shadow-sm'}>Add Book</NavLink>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
