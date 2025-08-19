import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RatingStars } from '../components/RatingStars'
import { Modal } from '../components/Modal'
import { selectBookById, removeBook } from '../redux/booksSlice'
import { showToast } from '../redux/uiSlice'
import { useState } from 'react'

function BookDetails() {
  const { id } = useParams()
  const book = useSelector(state => selectBookById(state, id))
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)

  if (!book) return (
    <div className="p-6">
      <p className="mb-4">Book not found.</p>
      <Link to="/books" className="text-blue-600">Back to Browse</Link>
    </div>
  )

  const onDelete = () => {
    dispatch(removeBook(id))
    dispatch(showToast('Book deleted'))
    navigate('/books')
  }

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <div className="md:col-span-2 space-y-3">
        <h1 className="text-3xl font-bold">{book.title}</h1>
        <p className="text-lg text-gray-600">by {book.author}</p>
        <RatingStars rating={Number(book.rating) || 0} size="lg" />
        <p className="text-sm text-blue-600">{book.category}</p>
        <p className="mt-3 leading-7">{book.description}</p>
        <div className="flex gap-3 pt-2">
          <Link to="/books" className="px-3 py-1.5 rounded border">Back to Browse</Link>
          <Link to={`/edit/${book.id}`} className="px-3 py-1.5 rounded bg-blue-600 text-white">Edit</Link>
          <button onClick={() => setOpen(true)} className="px-3 py-1.5 rounded bg-red-600 text-white">Delete</button>
        </div>
      </div>
      <div className="rounded-2xl border border-gray-200 p-4">
        <h3 className="font-semibold mb-2">About this book</h3>
        <ul className="text-sm space-y-1">
          <li><span className="text-gray-500">ID:</span> {book.id}</li>
          <li><span className="text-gray-500">Rating:</span> {book.rating}</li>
          <li><span className="text-gray-500">Category:</span> {book.category}</li>
        </ul>
      </div>
      <Modal 
        open={open} 
        title="Delete book" 
        onClose={() => setOpen(false)} 
        onConfirm={onDelete} 
        confirmText="Delete"
      >
        Are you sure you want to delete <strong>{book.title}</strong>? This action cannot be undone.
      </Modal>
    </div>
  )
}

export { BookDetails }
