import React, { useEffect, useRef, useState } from "react";
import "./Trending.css";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

function Trending() {
  const data = useSelector((state) => state.data.entries);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [images, setImages] = useState([]);
  const [width, setWidth] = useState(0);

  const trendingMotion = useRef();

  useEffect(() => {
    setWidth(trendingMotion.current.scrollWidth - trendingMotion.current.offsetWidth)
    console.log(trendingMotion.current.scrollWidth - trendingMotion.current.offsetWidth)
    console.log(trendingMotion.current.offsetWidth)
    console.log(trendingMotion.current.offsetWidth)
    
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };

  }, []);

  useEffect(() => {
    const largeImages = [];
    const smallImages = [];

    data.forEach((item) => {
      if (item.thumbnail && item.thumbnail.trending) {
        const { small, large } = item.thumbnail.trending;
        const smallImageUrl = `${process.env.PUBLIC_URL}${small}`;
        const largeImageUrl = `${process.env.PUBLIC_URL}${large}`;

        smallImages.push(smallImageUrl);
        largeImages.push(largeImageUrl);
      }
    });

    setImages(windowWidth >= 768 ? largeImages : smallImages);
  }, [data, windowWidth]);

  return (
    <div className="trending">
      <h1>Trending</h1>
      <motion.div className="trending-motion" ref={trendingMotion} whileTap={{cursor: 'grabbing'}}>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-trending-motion"
        >
          {images.map((image, index) => (
            <motion.div key={index} className="trending-image">
              <img src={image} alt="trending" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Trending;
