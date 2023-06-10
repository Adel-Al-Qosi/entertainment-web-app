import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Movies.css";
import movieIcon from '../../assets/icon-nav-movies.svg'
import playIcon from '../../assets/icon-play.svg'
import { changeMark } from "../../store/dataReducer";

function Movies({query}) {
  const data = useSelector((state) => state.data.entries);
  let cards = data.filter((item) => item.category === 'Movie');

  if (query) {
    cards = cards.filter(card => card.title.toLowerCase().includes(query.toLowerCase()))
  }

  const dispatch = useDispatch()

  const handleChangeMark = (title) => {
    dispatch(changeMark(title))
  }

  return (
    <>
      <h1>Movies</h1>
      <div className="recommended-container">
        {cards.map((card, index) => (
          <div className="card-container">
            
            <div
              key={index}
              className="recommended-card"
              style={{
                backgroundImage: `url(${card.thumbnail.regular.large})`,
              }}
            >
              {card.isBookmarked ? (
                <div onClick={() => handleChangeMark(card.title)} className="card-full"></div>
              ) : (
                <div onClick={() => handleChangeMark(card.title)} className="card-empty"></div>
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
                  <img src={movieIcon} alt="item" /> {card.category}
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

export default Movies;
