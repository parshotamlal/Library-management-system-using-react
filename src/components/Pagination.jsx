export function Pagination({ page, pages, onChange }) {
  if (pages <= 1) return null;
  return (
    <div className="flex items-center gap-2 mt-4">
      <button
        className="px-3 py-1 rounded border text-sm disabled:opacity-50"
        onClick={() => onChange(page - 1)}
        disabled={page <= 1}
      >
        Prev
      </button>
      <span className="text-sm">
        Page {page} of {pages}
      </span>
      <button
        className="px-3 py-1 rounded border text-sm disabled:opacity-50"
        onClick={() => onChange(page + 1)}
        disabled={page >= pages}
      >
        Next
      </button>
    </div>
  );
}
