import { useParams } from 'react-router-dom';
import { NavBar } from '../first_components/NavBar/NavBar';
import { Footer } from '../first_components/Footer/Footer';
import { CardsActivities } from '../first_components/CardsActivities/CardsActivities';
import { Header } from '../first_components/Header/Header';
import { Separator } from '../first_components/Separator/Separator';
import { InfoPage } from '../first_components/InfoPage/InfoPage';
import { ActivityDetail } from '../first_components/ActivityDetails/ActivityDetails';
import AbbayesDatas from '../datas/abbayes.json';

export const Abbayes = () => {
  const { id } = useParams();

  return (
    <>
      <Header typeOfCarousel="cinquieme" />
      <NavBar />
      <Separator />
      {id ? (
        <ActivityDetail />
      ) : (
        <>
          <InfoPage />
          <Separator />
          <CardsActivities data={AbbayesDatas} />
        </>
      )}
      <Footer />
    </>
  );
};
