import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import CastleDatas from '../../datas/castles.json';
import CarIcon from '../../assets/pictures/Icons/car.png';
import './styles/cards_castle.scss';

export const CardsCastle = () => {
  return (
    <div className="cc-container">
      {CastleDatas.map((card) => (
        <CardCastle key={card.id} {...card} />
      ))}
    </div>
  );
};

const CardCastle = ({ title, images, link, temps }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Hook Personnalisé

  const [intervalId, setIntervalId] = useState(null);
  const startSlideshow = () => {
    const id = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);
    setIntervalId(id);
  };
  const stopSlideshow = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  //

  return (
    <div>
      <div
        className="card-castle"
        onMouseEnter={startSlideshow}
        onMouseLeave={stopSlideshow}
      >
        <NavLink to={link} className="nav-c-card">
          <img
            className="img-castle"
            src={images[currentImageIndex]}
            alt={title}
          />
          <h1 className="title-castle">{title}</h1>
        </NavLink>
      </div>
      <div className="castles-time">
        <img className="castles-icon" src={CarIcon} alt="Icone voiture"></img>
        <h2>{temps}</h2>
      </div>
    </div>
  );
};
