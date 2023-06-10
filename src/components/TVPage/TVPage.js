import "./TVPage.css";
import Search from "../Search/Search";
import TV from "../TV/TV";
import { useState } from "react";

function TVPage() {
  const [query, setQuery] = useState('')
  return (
    <main>
      <Search
       placeholder="Search for"
       query={query}
       setQuery={setQuery} 
       />
      <TV query={query} />
    </main>
  );
}

export default TVPage;
