import "./BookmarkedPage.css";
import Search from "../Search/Search";
import Bookmarked from "../Bookmarked/Bookmarked";
import { useState } from "react";

function BookmarkedPage() {
  const [query, setQuery] = useState('')
  return (
    <main>
      <Search
       placeholder="Search for bookmarked shows"
       query={query}
       setQuery={setQuery} 
       />
      <Bookmarked query={query} />
    </main>
  );
}

export default BookmarkedPage;
