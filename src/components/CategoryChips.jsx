import { NavLink } from "react-router-dom";

export function CategoryChips({ categories }) {
  return (
    <div className="flex flex-wrap gap-2">
      <NavLink
        to="/books"
        className={({ isActive }) =>
          `px-3 py-1 rounded-full border text-sm transition-colors duration-200 ${
            isActive
              ? "bg-blue-600 text-white"
              : " text-gray-900 hover:bg-gray-300"
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
            `px-3 py-1 rounded-full border text-sm transition-colors duration-200 ${
              isActive
                ? "bg-blue-600 text-white"
                : " bg-blue-300 text-gray-900 hover:bg-gray-300"
            }`
          }
        >
          {cat}
        </NavLink>
      ))}
    </div>
  );
}
