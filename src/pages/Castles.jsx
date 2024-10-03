import { NavBar } from '../first_components/NavBar/NavBar';
import { Footer } from '../first_components/Footer/Footer';
import { CardsCastle } from '../secondary_components/CardsCastle/CardsCastle';
import { Header } from '../first_components/Header/Header';
import { Separator } from '../first_components/Separator/Separator';
import { CastlesInfos } from '../secondary_components/CastlesInfos/CastlesInfos';

export const Castles = () => {
  return (
    <>
      <Header typeOfCarousel="troisieme" />
      <NavBar />
      <Separator />
      <CastlesInfos />
      <Separator />
      <CardsCastle />
      <Footer />
    </>
  );
};
