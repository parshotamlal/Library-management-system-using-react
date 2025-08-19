import { Routes, Route, Navigate } from 'react-router-dom'
import {Layout} from './components/Layout'
import Home from './pages/Home'
import BrowseBooks from './pages/BrowseBooks'
import {BookDetails} from './pages/BookDetails'
import AddEditBook from './pages/AddEditBook'
import {NotFound} from './pages/NotFound'
import './App.css'
import {Contact} from './pages/Contact'
function App(){
  return (
    <Routes>
      <Route element={<Layout />}> 
        <Route index element={<Home />} />
        <Route path="/books" element={<BrowseBooks />} />
        <Route path="/books/:category" element={<BrowseBooks />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/add" element={<AddEditBook mode="add" />} />
        <Route path="/edit/:id" element={<AddEditBook mode="edit" />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
        <Route Path ="/contact" element ={<Contact />} />
      </Route>
    </Routes>
  
  )
 
}

export default App