import { NavLink } from "react-router-dom";

export function CategoryChips({ categories }) {
  return (
    <div className="flex flex-wrap gap-2">
      <NavLink
        to="/books"
        className={({ isActive }) =>
          `px-3 py-1 rounded-full border text-sm ${
            isActive ? "bg-blue-600 text-white" : "bg-gray-100 hover:bg-gray-200"
          }`
        }
      >
        All
      </NavLink>
      {categories.map((cat) => (
        <NavLink
          key={cat}
          to={`/books/${cat}`}
          className={({ isActive }) =>
            `px-3 py-1 rounded-full border text-sm ${
              isActive
                ? "bg-blue-600 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`
          }
        >
          {cat}
        </NavLink>
      ))}
    </div>
  );
}
