import { useNavigate } from "react-router-dom";

export function BookCard({ book }) {
  const navigate = useNavigate();
  return (
    <div
      className="rounded-2xl border shadow-sm hover:shadow-lg transition cursor-pointer p-4 flex flex-col"
      onClick={() => navigate(`/books/${book.category}?id=${book.id}`)}
    >
      <div className="flex-1">
        <h2 className="text-lg font-semibold line-clamp-1">{book.title}</h2>
        <p className="text-sm text-gray-500">by {book.author}</p>
        <p className="mt-2 text-yellow-600 font-medium">
          ⭐ {book.rating || "N/A"}
        </p>
      </div>
      <div className="mt-3 text-xs text-gray-400">Category: {book.category}</div>
    </div>
  );
}
