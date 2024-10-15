import { NavBar } from '../first_components/NavBar/NavBar';
import { Footer } from '../first_components/Footer/Footer';
import { CardsActivities } from '../first_components/CardsActivities/CardsActivities';
import { Header } from '../first_components/Header/Header';
import { Separator } from '../first_components/Separator/Separator';
import { InfoPage } from '../first_components/InfoPage/InfoPage';
import MountainsDatas from '../datas/mountains.json';

export const Mountains = () => {
  return (
    <>
      <Header typeOfCarousel="troisieme" />
      <NavBar />
      <Separator />
      <InfoPage />
      <Separator />
      <CardsActivities data={MountainsDatas} />
      <Footer />
    </>
  );
};
