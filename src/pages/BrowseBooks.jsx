import { useMemo, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { BookCard } from '../components/BookCard'
import { CategoryChips } from '../components/CategoryChips'
import { SearchBar } from '../components/SearchBar'
import { SortSelect } from '../components/SortSelect'
import { Pagination } from '../components/Pagination'
import { selectAllBooks, selectCategories } from '../redux/booksSlice'

const PAGE_SIZE = 6

export default function BrowseBooks() {
  const allBooks = useSelector(selectAllBooks)
  const categories = useSelector(selectCategories)
  const { category } = useParams()
  const [params, setParams] = useSearchParams()
  const navigate = useNavigate()

  // URL params
  const q = params.get('q') || ''
  const sort = params.get('sort') || 'title_asc'
  const page = Math.max(1, parseInt(params.get('page') || '1', 10))

  // Redirect to /books if category is invalid
  useEffect(() => {
    if (category && !categories.includes(category)) {
      navigate('/books', { replace: true })
    }
  }, [category, categories, navigate])

  // Filtering + sorting
  const filteredBooks = useMemo(() => {
    let list = allBooks

    if (category) {
      list = list.filter(b => b.category === category)
    }

    if (q) {
      const s = q.toLowerCase()
      list = list.filter(
        b =>
          b.title.toLowerCase().includes(s) ||
          b.author.toLowerCase().includes(s)
      )
    }

    switch (sort) {
      case 'title_desc':
        return [...list].sort((a, b) => b.title.localeCompare(a.title))
      case 'author_asc':
        return [...list].sort((a, b) => a.author.localeCompare(b.author))
      case 'author_desc':
        return [...list].sort((a, b) => b.author.localeCompare(a.author))
      case 'rating_desc':
        return [...list].sort((a, b) => Number(b.rating) - Number(a.rating))
      case 'rating_asc':
        return [...list].sort((a, b) => Number(a.rating) - Number(b.rating))
      default:
        return [...list].sort((a, b) => a.title.localeCompare(b.title))
    }
  }, [allBooks, category, q, sort])

  // Pagination
  const totalPages = Math.max(1, Math.ceil(filteredBooks.length / PAGE_SIZE))
  const currentBooks = filteredBooks.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  )

  // Update URL params
  const updateParam = (key, value) => {
    const next = new URLSearchParams(params)

    if (value === '' || value == null) {
      next.delete(key)
    } else {
      next.set(key, String(value))
    }

    // Reset page when filters change
    if (key !== 'page') {
      next.set('page', '1')
    }

    setParams(next, { replace: false })
  }

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
        <h1 className="text-2xl font-semibold">
          Browse Books{' '}
          {category && (
            <span className="text-gray-500">/ {category}</span>
          )}
        </h1>
      </div>

      {/* Category Chips */}
      <CategoryChips categories={categories} />

      {/* Search + Sort */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="sm:col-span-2">
          <SearchBar value={q} onChange={v => updateParam('q', v)} />
        </div>
        <div className="sm:col-span-1 flex items-center justify-between gap-3">
          <span className="text-sm text-gray-500">
            {filteredBooks.length} results
          </span>
          <SortSelect value={sort} onChange={v => updateParam('sort', v)} />
        </div>
      </div>

      {/* Book Grid */}
      {currentBooks.length === 0 ? (
        <div className="rounded-xl border border-dashed p-8 text-center text-gray-500">
          No books found. Try adjusting your filters.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {currentBooks.map(b => (
            <BookCard key={b.id} book={b} />
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center">
        <Pagination
          page={page}
          pages={totalPages}
          onChange={p => updateParam('page', p)}
        />
      </div>
    </div>
  )
}
