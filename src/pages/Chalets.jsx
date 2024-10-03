import Chalets from '../datas/chalets.json';
import { NavBar } from '../first_components/NavBar/NavBar';
import { Footer } from '../first_components/Footer/Footer';
import { SlideShow } from '../secondary_components/SlideShow/SlideShow';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

export const Chalet = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const chalet = Chalets.find((chalet) => chalet.id === id); // Utiliser 'Chalets'

  useEffect(() => {
    if (!chalet) {
      navigate('/Error');
    }
  }, [chalet, navigate]);

  return (
    <>
      <NavBar />
      {chalet && ( // Vérifier si 'chalet' existe
        <>
          <SlideShow pictures={chalet.pictures} />{' '}
          {/* Utiliser 'chalet.pictures' */}
        </>
      )}
      <Footer />
    </>
  );
};
