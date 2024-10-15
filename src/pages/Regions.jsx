import { NavBar } from '../first_components/NavBar/NavBar';
import { Header } from '../first_components/Header/Header';
import { Footer } from '../first_components/Footer/Footer';
import { InfoPage } from '../first_components/InfoPage/InfoPage';
import { CardsRegions } from '../secondary_components/CardsRegions/CardsRegions';
import { Separator } from '../first_components/Separator/Separator';

export const Regions = () => {
  return (
    <>
      <Header typeOfCarousel="deuxieme" />
      <NavBar />
      <Separator />
      <InfoPage />
      <Separator />
      <CardsRegions />
      <Footer />
    </>
  );
};
