import React, { useEffect, useState } from 'react';
import HeaderRegion1 from '../../assets/pictures/HeaderRegionsImg/corbiere.webp';
import HeaderRegion2 from '../../assets/pictures/HeaderRegionsImg/Lastours.webp';
import HeaderRegion3 from '../../assets/pictures/HeaderRegionsImg/citeCarcassonne.webp';
import HeaderRegion4 from '../../assets/pictures/HeaderRegionsImg/mountCover.webp';
import HeaderImage1 from '../../assets/pictures/HeaderImg/home-img.webp';
import HeaderImage2 from '../../assets/pictures/HeaderImg/home-img2.webp';
import HeaderCastle1 from '../../assets/pictures/HeaderCastle/HeaderCastle.webp';
import HeaderCastle2 from '../../assets/pictures/HeaderCastle/HeaderCastle2.webp';
import HeaderAbbaye from '../../assets/pictures/HeaderAbbayes/HeaderAbbaye.webp';
import HeaderAbbaye2 from '../../assets/pictures/HeaderAbbayes/HeaderAbbaye2.webp';
import HeaderAbbaye3 from '../../assets/pictures/HeaderAbbayes/HeaderAbbaye3.webp';
import HeaderMountain from '../../assets/pictures/HeaderMountain/HeaderMountain1.webp';
import HeaderMountain2 from '../../assets/pictures/HeaderMountain/HeaderMountain2.webp';
import HeaderMountain3 from '../../assets/pictures/HeaderMountain/HeaderMountain3.webp';
import HeaderWater from '../../assets/pictures/HeaderWater/Eau1.webp';
import HeaderWater2 from '../../assets/pictures/HeaderWater/Eau2.webp';
import HeaderWater3 from '../../assets/pictures/HeaderWater/Eau3.webp';
import HeaderSea from '../../assets/pictures/HeaderSea/HeaderMer1.webp';
import HeaderSea2 from '../../assets/pictures/HeaderSea/HeaderMer2.webp';
import { HeaderElements } from './HeaderElements';
import './header.scss';

export const Header = ({ typeOfCarousel }) => {
  const images =
    typeOfCarousel === 'premier'
      ? [HeaderImage1, HeaderImage2]
      : typeOfCarousel === 'deuxieme'
      ? [HeaderRegion1, HeaderRegion2, HeaderRegion3, HeaderRegion4]
      : typeOfCarousel === 'troisieme'
      ? [HeaderCastle1, HeaderCastle2]
      : typeOfCarousel === 'quatrieme'
      ? [HeaderImage2]
      : typeOfCarousel === 'cinquieme'
      ? [HeaderAbbaye, HeaderAbbaye2, HeaderAbbaye3]
      : typeOfCarousel === 'sixieme'
      ? [HeaderMountain, HeaderMountain2, HeaderMountain3]
      : typeOfCarousel === 'septieme'
      ? [HeaderWater, HeaderWater2, HeaderWater3]
      : typeOfCarousel === 'huitieme'
      ? [HeaderSea, HeaderSea2]
      : null;

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
      <div className="hdr-top-elements">
        <HeaderElements typeOfCarousel={typeOfCarousel} />
      </div>
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
    </div>
  );
};
