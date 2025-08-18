import { configureStore } from '@reduxjs/toolkit'
import booksReducer, { booksPersistence } from './booksSlice'
import uiReducer from './uiSlice'

export const store = configureStore({
  reducer: {
    books: booksReducer,
    ui: uiReducer,
  },
  middleware: (getDefault) => getDefault().concat(booksPersistence),
})
