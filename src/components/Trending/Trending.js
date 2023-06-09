import React, { useState, useRef, useLayoutEffect } from "react";
import "./Trending.css";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import movieIcon from "../../assets/icon-category-movie.svg";
import playIcon from '../../assets/icon-play.svg'

function Trending() {
  const data = useSelector((state) => state.data.entries);
  const [cards, setCards] = useState([]);
  const [width, setWidth] = useState(0);

  const trendingMotion = useRef();

  useLayoutEffect(() => {
    const updateWidth = () => {
      const currentWidth = trendingMotion.current.offsetWidth;
      const scrollWidth = trendingMotion.current.scrollWidth;
      setWidth(scrollWidth - currentWidth);
    };

    updateWidth();

    const requestID = requestAnimationFrame(updateWidth);

    return () => cancelAnimationFrame(requestID);
  }, []);

  useLayoutEffect(() => {
    const generateCards = () => {
      const generatedCards = data
        .filter((item) => item.thumbnail && item.thumbnail.trending)
        .map((item) => {
          const { large } = item.thumbnail.trending;
          const largeImageUrl = `${process.env.PUBLIC_URL}${large}`;

          return {
            image: largeImageUrl,
            title: item.title,
            description: {
              year: item.year,
              category: item.category,
              rating: item.rating,
            },
            isMarked: item.isBookmarked,
          };
        });

      setCards(generatedCards);
    };

    generateCards();
  }, [data]);

  return (
    <div className="trending">
      <h1>Trending</h1>
      <motion.div
        className="trending-motion"
        ref={trendingMotion}
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-trending-motion"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="trending-card"
              style={{ backgroundImage: `url(${card.image})` }}
            >
              <h2 className="card-title">{card.title}</h2>
              <div className="card-description">
                <p>{card.description.year}</p>
                <p className="flex">
                  <img src={movieIcon} alt="item" /> {card.description.category}
                </p>
                <p>{card.description.rating}</p>
              </div>
              {card.isMarked ? (
                <div className="card-mark-full"></div>
              ) : (
                <div className="card-mark-empty"></div>
              )}
              <div className="card-play">
                <div className="inner-card-play">
                  <img src={playIcon} />
                  <p>Play</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Trending;
