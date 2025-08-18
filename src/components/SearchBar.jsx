import { useState, useEffect } from "react";

export function SearchBar({ value, onChange }) {
  const [input, setInput] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (input !== value) onChange(input);
    }, 400);
    return () => clearTimeout(handler);
  }, [input]);

  return (
    <input
      className="w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
      placeholder="Search books..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
  );
}
