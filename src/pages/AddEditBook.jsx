import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useDispatch, useSelector } from 'react-redux'
import { addBook, selectBookById, updateBook } from '../redux/booksSlice'
import { nanoid } from 'nanoid'
import { useNavigate, useParams } from 'react-router-dom'
import { showToast } from '../redux/uiSlice'

const schema = z.object({
  title: z.string().min(2, 'Title is too short'),
  author: z.string().min(2, 'Author is required'),
  category: z.string().min(2, 'Category is required'),
  description: z.string().min(10, 'Description must be 10+ chars'),
  rating: z.coerce.number().min(0).max(5, 'Rating 0-5'),
})

export default function AddEditBook({ mode }){
  const { id } = useParams()
  const existing = useSelector(s => id ? selectBookById(s, id) : null)
  const { register, handleSubmit, setValue, formState: { errors, isSubmitting } } = useForm({ resolver: zodResolver(schema) })
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(()=>{
    if(mode==='edit' && existing){
      for(const k of ['title','author','category','description','rating']) setValue(k, existing[k])
    }
  }, [mode, existing, setValue])

  const onSubmit = (data) => {
    if(mode==='add'){
      const book = { id: nanoid(8), ...data }
      dispatch(addBook(book))
      dispatch(showToast('Book added'))
      navigate(`/books/${encodeURIComponent(book.category)}`)
    } else if(mode==='edit' && existing){
      dispatch(updateBook({ id: existing.id, changes: data }))
      dispatch(showToast('Book updated'))
      navigate(`/book/${existing.id}`)
    }
  }

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-semibold mb-4">{mode==='add' ? 'Add a New Book' : 'Edit Book'}</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Title</label>
          <input {...register('title')} className="w-full rounded-xl border px-3 py-2 bg-white dark:bg-gray-900" />
          {errors.title && <p className="text-red-600 text-sm">{errors.title.message}</p>}
        </div>
        <div>
          <label className="block text-sm mb-1">Author</label>
          <input {...register('author')} className="w-full rounded-xl border px-3 py-2 bg-white dark:bg-gray-900" />
          {errors.author && <p className="text-red-600 text-sm">{errors.author.message}</p>}
        </div>
        <div>
          <label className="block text-sm mb-1">Category</label>
          <input {...register('category')} list="catlist" className="w-full rounded-xl border px-3 py-2 bg-white dark:bg-gray-900" />
          <datalist id="catlist">
            <option>Fiction</option>
            <option>Non-Fiction</option>
            <option>Sci-Fi</option>
            <option>Mystery</option>
            <option>Biography</option>
          </datalist>
          {errors.category && <p className="text-red-600 text-sm">{errors.category.message}</p>}
        </div>
        <div>
          <label className="block text-sm mb-1">Description</label>
          <textarea rows={5} {...register('description')} className="w-full rounded-xl border px-3 py-2 bg-white dark:bg-gray-900" />
          {errors.description && <p className="text-red-600 text-sm">{errors.description.message}</p>}
        </div>
        <div>
          <label className="block text-sm mb-1">Rating (0-5)</label>
          <input type="number" step="0.1" min="0" max="5" {...register('rating')} className="w-full rounded-xl border px-3 py-2 bg-white dark:bg-gray-900" />
          {errors.rating && <p className="text-red-600 text-sm">{errors.rating.message}</p>}
        </div>
        <div className="pt-2 flex gap-3">
          <button disabled={isSubmitting} type="submit" className="px-4 py-2 rounded-xl bg-blue-600 text-white">{mode==='add'? 'Add Book' : 'Save Changes'}</button>
          <button type="button" onClick={()=> navigate(-1)} className="px-4 py-2 rounded-xl border">Cancel</button>
        </div>
      </form>
    </div>
  )
}
