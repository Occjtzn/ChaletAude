import { Link } from 'react-router-dom';
import Chalets from '../../datas/chalets.json';
import { useEffect, useState } from 'react';
import './styles/cards_container.scss';

export const CardsContainer = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(Chalets);
  }, []);

  return (
    <div className="card-container">
      {cards.map((card) => (
        <div className="card" key={card.id}>
          <Link to={`/chalet/${card.id}`}>
            <img className="card-img" src={card.cover} alt={card.title} />
            <h2 className="card-title">{card.title}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};
