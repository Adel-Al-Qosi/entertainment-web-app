import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { changeMark, filterData, loadData } from "../../store/dataReducer";
import movieIcon from "../../assets/icon-nav-movies.svg";
import playIcon from "../../assets/icon-play.svg";
import TVIcon from "../../assets/icon-nav-tv-series.svg";
import "./Main.css";

function Main({ query, locatedIn, setLocatedIn }) {
  const dispatch = useDispatch();
  const url = useLocation().pathname;

  useEffect(() => {
    dispatch(loadData());
  }, [dispatch]);

  useEffect(() => {
    dispatch(filterData(url));
  }, [dispatch, url]);

  let data = useSelector((state) => state.data.entries);

  const handleChangeMark = (title) => {
    dispatch(changeMark(title));
  };

  let cards;

  if (locatedIn === "main") cards = data.filter((item) => !item.isTrending);
  else cards = data;

  console.log(cards);

  if (query)
    cards = cards.filter((card) =>
      card.title.toLowerCase().includes(query.toLowerCase())
    );

  if (url === "/") setLocatedIn("main");
  else if (url === "/movies") setLocatedIn("movies");
  else if (url === "/TV-series") setLocatedIn("TV-series");
  else if (url === "/bookmarked") setLocatedIn("bookmarked");

  return (
    <>
      <h1>
        {
          query ? `Found ${cards.length} results for ${query}`
          : locatedIn === "main"
          ? "Recommended for you"
          : locatedIn === "movies"
          ? "Movies"
          : locatedIn === "TV-series"
          ? "TV Series"
          : "Bookmarked"
          }
      </h1>
      <div className="recommended-container">
        {cards.map((card, index) => (
          <div className="card-container" key={index}>
            <div
              className="recommended-card"
              style={{
                backgroundImage: `url(${card.thumbnail.regular.large})`,
              }}
            >
              {card.isBookmarked ? (
                <div
                  onClick={() => handleChangeMark(card.title)}
                  className="card-full"
                ></div>
              ) : (
                <div
                  onClick={() => handleChangeMark(card.title)}
                  className="card-empty"
                ></div>
              )}
              <div className="card-play">
                <div className="inner-card-play">
                  <img src={playIcon} alt="play" />
                  <p>Play</p>
                </div>
              </div>
            </div>
            <div className="card-info">
              <div className="card-description-re">
                <p>{card.year}</p>
                <p className="flex">
                  {card.category === "Movie" ? (
                    <img src={movieIcon} alt="item" />
                  ) : (
                    <img src={TVIcon} alt="item" />
                  )}{" "}
                  {card.category}
                </p>
                <p>{card.rating}</p>
              </div>
              <h3>{card.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Main;
