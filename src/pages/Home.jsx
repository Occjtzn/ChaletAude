import { NavBar } from '../first_components/NavBar/NavBar';
import { Header } from '../first_components/Header/Header';
import { HomeInfo } from '../secondary_components/HomeInformation/HomeInfo';
import { Footer } from '../first_components/Footer/Footer';
import { CardsContainer } from '../secondary_components/CardsContainer/CardsContainer';
import { Separator } from '../first_components/Separator/Separator';

export const Home = () => {
  return (
    <>
      <Header typeOfCarousel="premier" />
      <NavBar />
      <Separator />
      <HomeInfo />
      <Separator />
      <CardsContainer />
      <Footer />
    </>
  );
};
