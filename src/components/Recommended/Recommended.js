import React from "react";
import { useSelector } from "react-redux";
import "./Recommended.css";
import movieIcon from '../../assets/icon-nav-movies.svg'

function Recommended() {
  const data = useSelector((state) => state.data.entries);
  const cards = data.filter((item) => item.isTrending === false);

  return (
    <>
      <h1>Recommended for you</h1>
      <div className="recommended-container">
        {cards.map((card, index) => (
          <div className="card-container">
            <div
              key={index}
              className="recommended-card"
              style={{
                backgroundImage: `url(${card.thumbnail.regular.large})`,
              }}
            ></div>
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

export default Recommended;
