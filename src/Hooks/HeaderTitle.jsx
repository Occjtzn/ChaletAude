import { useState, useEffect } from 'react';

export const useHeaderTitle = (typeOfCarousel) => {
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
      default:
        setTitle('Type de carousel non reconnu');
    }
  }, [typeOfCarousel]);

  return title;
};
