import { useLocation } from "react-router-dom";
import Main from "../Main/Main";
import Search from "../Search/Search";
import Trending from "../Trending/Trending";
import "./MainPage.css";
import { useState } from "react";
import { useEffect } from "react";

function MainPage() {
  const [locatedIn, setLocatedIn] = useState("main");
  const [query, setQuery] = useState("");
  const location = useLocation().pathname;

  useEffect(() => {
    if (location === "/") setLocatedIn("main");
    else if (location === "/movies") setLocatedIn("movies");
    else if (location === "/TV-series") setLocatedIn("TV-series");
    else if (location === "/bookmarked") setLocatedIn("bookmarked");
  }, [location]);

  return (
    <main>
      <Search
        placeholder={
          locatedIn === "main"
            ? "Search for movies and TV series"
            : locatedIn === "movies"
            ? "Search for movies"
            : locatedIn === "TV-series"
            ? "Search for TV series"
            : "Search for Bookmarked"
        }
        setQuery={setQuery}
      />
      {locatedIn === "main" && !query ? <Trending /> : null}
      <Main query={query} locatedIn={locatedIn} setLocatedIn={setLocatedIn} />
    </main>
  );
}

export default MainPage;
