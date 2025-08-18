const options = [
  { value: "title_asc", label: "Title (A-Z)" },
  { value: "title_desc", label: "Title (Z-A)" },
  { value: "author_asc", label: "Author (A-Z)" },
  { value: "author_desc", label: "Author (Z-A)" },
  { value: "rating_desc", label: "Rating (High → Low)" },
  { value: "rating_asc", label: "Rating (Low → High)" },
];

export function SortSelect({ value, onChange }) {
  return (
    <select
      className="rounded-lg border px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
}
