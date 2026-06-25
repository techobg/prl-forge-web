import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSearch() {
    const value = query.trim();

    if (!value) return;

    // Засега приемаме, че е Block Height
    navigate(`/blocks/${value}`);
  }

  return (
    <div className="mb-8">
      <div className="flex overflow-hidden rounded-xl border border-white/10 bg-white/5">

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          placeholder="Search block height, hash or wallet..."
          className="w-full bg-transparent px-5 py-4 text-white outline-none placeholder:text-gray-500"
        />

        <button
          onClick={handleSearch}
          className="flex items-center gap-2 bg-indigo-600 px-6 transition hover:bg-indigo-500"
        >
          <Search size={18} />
          Search
        </button>

      </div>
    </div>
  );
}