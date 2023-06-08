import "./Search.css";

function Search({ placeholder }) {
  return (
    <div className="search">
      <button className="search-btn">

        <span className="sr-only">search</span>
      </button>
      <input className="search-text" type="text" placeholder={placeholder} />
    </div>
  );
}

export default Search;
