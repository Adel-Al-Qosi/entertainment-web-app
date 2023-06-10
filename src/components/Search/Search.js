import "./Search.css";

function Search({ placeholder, query, setQuery }) {
  
  return (
    <div className="search">
      <button className="search-btn">

        <span className="sr-only">search</span>
      </button>
      <input
       className="search-text"
        type="text"
         placeholder={placeholder}
         value={query}
         onChange={(e) => setQuery(e.target.value)}
          />
    </div>
  );
}

export default Search;
