function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="w-full max-w-xl mx-auto">
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-500"
      />
    </div>
  )
}

export default SearchBar