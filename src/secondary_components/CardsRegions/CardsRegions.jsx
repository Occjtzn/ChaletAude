import React from 'react'; // Garde uniquement React ici
import { NavLink } from 'react-router-dom'; // Importation correcte de NavLink
import RegionDatas from '../../datas/regions.json';
import './styles/cards-regions.scss';

export const CardsRegions = () => {
  return (
    <div className="cr-container">
      {RegionDatas.map((card) => (
        <div key={card.id} className="card-region">
          <NavLink to={card.link} className="nav-r-card">
            <img className="img-region" src={card.imgSrc} alt={card.title} />
            <h2 className="title-region">{card.title}</h2>
          </NavLink>
        </div>
      ))}
    </div>
  );
};
