function SearchBar({ onSearch, searchTerm }) {
  const handleInputChange = (e) => {
    onSearch(e.target.value)
  }

  const clearSearch = () => {
    onSearch('')
  }

  return (
    <div className="search-container">
      <div className="search-input-wrapper">
        <input
          type="text"
          placeholder="Search contacts by name or phone..."
          value={searchTerm}
          onChange={handleInputChange}
          className="search-input"
        />
        {searchTerm && (
          <button 
            className="search-clear"
            onClick={clearSearch}
            title="Clear search"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  )
}

export default SearchBar