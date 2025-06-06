import Chalets from '../datas/chalets.json';
import { NavBar } from '../first_components/NavBar/NavBar';
import { Footer } from '../first_components/Footer/Footer';
import { SlideShow } from '../secondary_components/SlideShow/SlideShow';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Header } from '../first_components/Header/Header';
import { InformationsChalet } from '../secondary_components/InformationsChalet/InformationsChalet';

export const Chalet = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const chalet = Chalets.find((chalet) => chalet.id === id);

  useEffect(() => {
    if (!chalet) {
      navigate('/Error');
    }
  }, [chalet, navigate]);

  return (
    <>
      <Header typeOfCarousel="quatrieme" />
      <NavBar />
      {chalet && (
        <>
          <SlideShow pictures={chalet.pictures} />
          <InformationsChalet chalet={chalet} />
        </>
      )}

      <Footer />
    </>
  );
};
