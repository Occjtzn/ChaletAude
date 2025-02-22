import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import './slide_show.scss';

export const SlideShow = ({ pictures }) => {
  const [index, setIndex] = useState(0);
  const totalPictures = pictures.length;

  useEffect(() => {
    pictures.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [pictures]);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % totalPictures);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + totalPictures) % totalPictures);
  };

  return (
    <div className="slide-show">
      <div className="slide-container">
        {pictures.map((pic, i) => (
          <div
            key={i}
            className={`slide ${i === index ? 'active' : ''}`}
            style={{ backgroundImage: `url(${pic})` }}
          />
        ))}
      </div>
      <button className="prev-button" onClick={prevSlide}>
        <FontAwesomeIcon className="icon" icon={faChevronLeft} size="2x" />
      </button>
      <button className="next-button" onClick={nextSlide}>
        <FontAwesomeIcon className="icon" icon={faChevronRight} size="2x" />
      </button>
      <div className="slide-indicators">
        {pictures.map((_, i) => (
          <span
            key={i}
            className={`indicator ${i === index ? 'active' : ''}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};
