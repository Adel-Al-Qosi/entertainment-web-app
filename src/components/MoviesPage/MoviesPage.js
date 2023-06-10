import "./MoviesPage.css";
import Search from "../Search/Search";
import Movies from "../Movies/Movies";
import { useState } from "react";

function MoviesPage() {
  const [query, setQuery] = useState('')
  return (
    <main>
      <Search
       placeholder="Search for"
       query={query}
       setQuery={setQuery} 
       />
      <Movies query={query} />
    </main>
  );
}

export default MoviesPage;
