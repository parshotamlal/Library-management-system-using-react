import { useSelector } from 'react-redux'
import {BookCard} from '../components/BookCard'
import { selectAllBooks, selectCategories } from '../redux/booksSlice'
import { Link } from 'react-router-dom'

export default function Home(){
  const books = useSelector(selectAllBooks)
  const categories = useSelector(selectCategories)
  const popular = [...books].sort((a,b)=> Number(b.rating)-Number(a.rating)).slice(0,6)
  return (
    <div className="space-y-6">
      <section className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 shadow">
        <h1 className="text-3xl font-bold">Welcome to the Online Library</h1>
        <p className="mt-2 text-white/90">Discover, search, and manage your books — now with sorting, search, pagination, and more.</p>
        <div className="mt-4 flex gap-3">
          <Link to="/books" className="bg-white text-blue-700 px-4 py-2 rounded-xl font-semibold">Browse Books</Link>
          <Link to="/add" className="bg-black/20 backdrop-blur px-4 py-2 rounded-xl">Add a Book</Link>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">Categories</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map(c => (
            <Link key={c} to={`/books/${encodeURIComponent(c)}`} className="px-3 py-1.5 rounded-2xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700">{c}</Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">Popular Books</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {popular.map(b => <BookCard key={b.id} book={b} />)}
        </div>
      </section>
    </div>
  )
}