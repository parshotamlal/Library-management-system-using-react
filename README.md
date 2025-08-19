📚 Advanced Online Library

An advanced online library management application built with React (Vite), Redux Toolkit, and TailwindCSS.
It allows users to browse, add, update, and remove books with categories, ratings, and persistence using localStorage.

🚀 Features

✅ Browse Books by category, title, and author
✅ Add New Books with title, author, category, description, and rating
✅ Update & Delete existing books
✅ Persistent Storage using localStorage (books remain saved after refresh)
✅ Redux Toolkit for state management
✅ Toast Notifications for UI feedback
✅ Responsive UI with TailwindCSS
✅ Preloaded Seed Data (e.g., The Great Gatsby, Dune, Gone Girl)

🛠️ Tech Stack

⚡ Vite
 – Fast React development

⚛️ React
 – Component-based UI

🎨 TailwindCSS
 – Styling

🔄 Redux Toolkit
 – State management

💾 LocalStorage – Data persistence

📂 Project Structure
<img width="1043" height="227" alt="image" src="https://github.com/user-attachments/assets/1d665be7-73b6-4208-9612-b6096473977d" />


⚙️ Installation

Clone the repo

git clone https://github.com/your-username/advanced-online-library.git
cd advanced-online-library


Install dependencies

npm install


Run the development server

npm run dev


Build for production

npm run build

🔥 Redux State Overview

booksSlice.js

addBook → Add new book

updateBook → Update existing book

removeBook → Delete book

Persistence via booksPersistence middleware

uiSlice.js

showToast → Show a success/error message

hideToast → Hide message

Selectors

selectAllBooks → All books list

selectCategories → Unique categories

selectBookById → Get book by ID
