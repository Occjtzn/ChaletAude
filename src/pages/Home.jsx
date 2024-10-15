import { NavBar } from '../first_components/NavBar/NavBar';
import { Header } from '../first_components/Header/Header';
import { InfoPage } from '../first_components/InfoPage/InfoPage';
import { Footer } from '../first_components/Footer/Footer';
import { CardsChalets } from '../secondary_components/CardsChalets/CardsChalets';
import { Separator } from '../first_components/Separator/Separator';

export const Home = () => {
  return (
    <>
      <Header typeOfCarousel="premier" />
      <NavBar />
      <Separator />
      <InfoPage />
      <Separator />
      <CardsChalets />
      <Footer />
    </>
  );
};
