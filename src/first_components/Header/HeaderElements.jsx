import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ChaletLogo from '../../assets/pictures/Logo/logo-chalets-aude.webp';
import './header.scss';

export const HeaderElements = ({ typeOfCarousel }) => {
  const [title, setTitle] = useState('');

  useEffect(() => {
    switch (typeOfCarousel) {
      case 'premier':
        setTitle('Bienvenue en Pays Cathare ...');
        break;
      case 'deuxieme':
        setTitle('Découvrez notre Région ...');
        break;
      case 'troisieme':
        setTitle("Châteaux et citadelles d'Occitanie");
        break;
      case 'quatrieme':
        setTitle('Nos Chalets');
        break;
      default:
        setTitle('Type de carousel non reconnu');
    }
  }, [typeOfCarousel]);

  return (
    <div className="logo-elements">
      <Link to="/" className="logo-link">
        <img className="logo-img" src={ChaletLogo} alt="Logo" />
      </Link>
      <h2 className="hdr-title">{title}</h2>
    </div>
  );
};
