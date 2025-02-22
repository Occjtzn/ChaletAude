import React from 'react';
import { useNavigate } from 'react-router-dom';
import './informations-chalet.scss';

export const InformationsChalet = ({ chalet }) => {
  const navigate = useNavigate();

  const handleReservation = () => {
    navigate('/contact'); // Redirection vers la page Contact
  };

  return (
    <div className="informations-chalet">
      <h1 className="title">{chalet.title}</h1>
      <p className="description">{chalet.description}</p>
      {chalet.location && (
        <p className="location">
          <strong>Localisation :</strong> {chalet.location}
        </p>
      )}
      {chalet.equipements && (
        <div className="equipements">
          <h3>Équipements</h3>
          <ul>
            {chalet.equipements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      {chalet.exterieurs && (
        <div className="exterieurs">
          <h3>Extérieurs</h3>
          <ul>
            {chalet.exterieurs.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      <div className="hour-container">
        <p className="arrivee">
          <strong>Heure d'Arrivée :</strong> {chalet.arrivee}
        </p>
        <p className="depart">
          <strong>Heure de Départ :</strong> {chalet.depart}
        </p>
      </div>
      <p className="price">
        <strong>Tarif hebdomadaire pleine saison :</strong> {chalet.tarif}
      </p>
      <button className="reserve-button" onClick={handleReservation}>
        Réserver
      </button>
    </div>
  );
};
