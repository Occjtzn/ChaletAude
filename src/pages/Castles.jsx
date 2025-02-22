import { useParams } from 'react-router-dom';
import { NavBar } from '../first_components/NavBar/NavBar';
import { Footer } from '../first_components/Footer/Footer';
import { CardsActivities } from '../first_components/CardsActivities/CardsActivities';
import { Header } from '../first_components/Header/Header';
import { Separator } from '../first_components/Separator/Separator';
import { InfoPage } from '../first_components/InfoPage/InfoPage';
import { ActivityDetail } from '../first_components/ActivityDetails/ActivityDetails'; // Import du composant détail
import CastleDatas from '../datas/castles.json';

export const Castles = () => {
  const { id } = useParams();

  return (
    <>
      <Header typeOfCarousel="troisieme" />
      <NavBar />
      <Separator />
      {id ? (
        <ActivityDetail />
      ) : (
        <>
          <InfoPage />
          <Separator />
          <CardsActivities data={CastleDatas} />
        </>
      )}
      <Footer />
    </>
  );
};
