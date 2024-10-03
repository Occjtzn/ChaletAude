import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import './styles/slide_show.scss';

export const SlideShow = ({ pictures }) => {
  const [index, setIndex] = useState(0);
  const totalPictures = pictures.length;

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % totalPictures);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + totalPictures) % totalPictures);
  };

  return (
    <div className="slide-show">
      <button className="prev-button" onClick={prevSlide}>
        <FontAwesomeIcon className="icon" icon={faChevronLeft} size="8x" />
      </button>
      <img
        src={pictures[index]}
        alt={`Slide ${index + 1}`}
        className="slide-img"
      />
      <button className="next-button" onClick={nextSlide}>
        <FontAwesomeIcon className="icon" icon={faChevronRight} size="8x" />
      </button>
      <div className="slide-count">
        {index + 1} / {totalPictures}
      </div>
    </div>
  );
};
