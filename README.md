## Library Management System ##

##An Library Management System application built with React (Vite), Redux Toolkit, and TailwindCSS.
It allows users to browse, add, update, and remove books with categories, ratings, and persistence using localStorage.##

---

##🚀 Features##

✅ Browse Books by category, title, and author
✅ Add New Books with title, author, category, description, and rating
✅ Update & Delete existing books
✅ Persistent Storage using localStorage (books remain saved after refresh)
✅ Redux Toolkit for state management
✅ Toast Notifications for UI feedback
✅ Responsive UI with TailwindCSS
✅ Preloaded Seed Data (e.g., The Great Gatsby, Dune, Gone Girl)

---
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


------
---

📂 Project Structure
advanced-library/
│── public/                  # Static assets (favicon, images, etc.)
│
│── src/
│   ├── components/          # Reusable UI components
│   │   ├── Header.jsx
│   │   ├── Navbar.jsx
│   │   ├── SearchBar.jsx
│   │   ├── BookCard.jsx
│   │   ├── Toast.jsx
│   │   ├── ToastHost.jsx
│   │   ├── Modal.jsx
│   │   ├── CategoryChips.jsx
│   │   ├── Layout.jsx
│   │   ├── RatingStar.jsx
│   │   ├── SortSelect.jsx
│   │   └── Pagination.jsx
│
│   ├── pages/               # Full-page views
│   │   ├── Home.jsx
│   │   ├── AddEditBook.jsx
│   │   ├── BookDetails.jsx
│   │   ├── About.jsx
│   │   ├── BrowseBooks.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── Footer/          # (optional folder if footer needs multiple files)
│
│   ├── redux/               # Redux Toolkit slices + store
│   │   ├── booksSlice.js
│   │   ├── uiSlice.js
│   │   └── store.js
│
│   ├── hooks/               # Custom React hooks
│   │   └── useDebouncedValue.js

---

##⚙️ Installation##

Clone the repo

git clone https://github.com/parshotamlal/Library-management-system-using-react.git
cd Library-management-system-using-react


##Install dependencies##

npm install


##Run the development server##

npm run dev


##Build for production##

npm run build

---
##📬 Contact##

For queries or suggestions, feel free to reach out!

Author: Parshotam Lal 
Email: parshotamwork@gmail.com
