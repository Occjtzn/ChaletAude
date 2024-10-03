import React, { useEffect, useState } from 'react';
import HeaderRegion1 from '../../assets/pictures/HeaderRegionsImg/corbiere.webp';
import HeaderRegion2 from '../../assets/pictures/HeaderRegionsImg/Lastours.webp';
import HeaderRegion3 from '../../assets/pictures/HeaderRegionsImg/citeCarcassonne.webp';
import HeaderRegion4 from '../../assets/pictures/HeaderRegionsImg/mountCover.webp';
import HeaderImage1 from '../../assets/pictures/HeaderImg/home-img.webp';
import HeaderImage2 from '../../assets/pictures/HeaderImg/home-img2.webp';
import HeaderCastle1 from '../../assets/pictures/HeaderCastle/HeaderCastle.webp';
import HeaderCastle2 from '../../assets/pictures/HeaderCastle/HeaderCastle2.webp';
import { useHeaderTitle } from '../../Hooks/HeaderTitle';

import './styles/header.scss';

export const Header = ({ typeOfCarousel }) => {
  const title = useHeaderTitle(typeOfCarousel);

  const images =
    typeOfCarousel === 'premier'
      ? [HeaderImage1, HeaderImage2]
      : typeOfCarousel === 'deuxieme'
        ? [HeaderRegion1, HeaderRegion2, HeaderRegion3, HeaderRegion4]
        : typeOfCarousel === 'troisieme'
          ? [HeaderCastle1, HeaderCastle2]
          : [];

  const [index, setIndex] = useState(0);
  const totalImages = images.length;

  useEffect(() => {
    if (totalImages === 0) return;
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % totalImages);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [totalImages]);

  return (
    <div className="hdr">
      <div className="hdr-img-wrapper">
        {images.map((img, idx) => (
          <img
            key={idx}
            className={`hdr-img ${idx === index ? 'active' : ''}`}
            src={img}
            alt={`header ${idx + 1}`}
          />
        ))}
      </div>
      {/** Faire hook personnalisé pour le titre */}
      <h2 className="hdr-title">{title}</h2>
    </div>
  );
};
