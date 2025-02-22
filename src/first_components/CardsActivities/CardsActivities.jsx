import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import CarIcon from '../../assets/pictures/Icons/car.png';
import './cards_activities.scss';

export const CardsActivities = ({ data }) => {
  return (
    <div className="cc-container">
      {data.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
};

const Card = ({ id, title, images, temps }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
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

  return (
    <div>
      <div
        className="card-activities"
        onMouseEnter={startSlideshow}
        onMouseLeave={stopSlideshow}
      >
        <NavLink to={`/Castles/${id}`} className="nav-card">
          <img
            className="img-activities"
            src={images[currentImageIndex]}
            alt={title}
          />
          <h1 className="title-activities">{title}</h1>
        </NavLink>
      </div>
      <div className="activities-time">
        <img className="icon" src={CarIcon} alt="Icône voiture" />
        <h2>{temps}</h2>
      </div>
    </div>
  );
};
