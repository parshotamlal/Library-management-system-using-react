import { createSlice } from "@reduxjs/toolkit";

const initial = JSON.parse(localStorage.getItem("books")) || [
  { id: "1", title: "The Hobbit", author: "J.R.R. Tolkien", rating: 4.8, category: "Fantasy", description: "A fantasy adventure." },
  { id: "2", title: "Atomic Habits", author: "James Clear", rating: 4.7, category: "Self-Help", description: "A book about habit building." },
  { id: "3", title: "Clean Code", author: "Robert C. Martin", rating: 4.6, category: "Programming", description: "Best practices in coding." },
  { id: "4", title: "The Alchemist", author: "Paulo Coelho", rating: 4.5, category: "Fiction", description: "A philosophical novel." },
  { id: "5", title: "Harry Potter", author: "J.K. Rowling", rating: 4.9, category: "Fantasy", description: "The famous wizard story." },
  { id: "6", title: "1984" , author: "George Orwell", rating: 4.6, category: "Fiction", description: "A dystopian novel about totalitarianism. "},
]

const booksSlice = createSlice({
  name: "books",
  initialState: initial,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload)
    },
    updateBook: (state, action) => {
      const { id, changes } = action.payload
      const index = state.findIndex(b => b.id === id)
      if (index !== -1) {
        state[index] = { ...state[index], ...changes }
      }
    },
    deleteBook: (state, action) => {
      const id = action.payload
      return state.filter(b => b.id !== id)
    },
    removeBook: (state, action) => {
      // alias of deleteBook (in case you want both)
      const id = action.payload
      return state.filter(b => b.id !== id)
    }
  },
})

// ✅ Actions
export const { addBook, updateBook, deleteBook, removeBook } = booksSlice.actions

// ✅ Selectors
export const selectAllBooks = (state) => state.books
export const selectBookById = (state, id) =>
  state.books.find((b) => b.id === id)
export const selectCategories = (state) => [
  ...new Set(state.books.map((b) => b.category)),
]

// ✅ Reducer
export default booksSlice.reducer

// ✅ Middleware for persistence
export const booksPersistence = (store) => (next) => (action) => {
  const result = next(action)
  const state = store.getState()
  localStorage.setItem("books", JSON.stringify(state.books))
  return result
}
