import { NavBar } from '../first_components/NavBar/NavBar';
import { Header } from '../first_components/Header/Header';
import { Footer } from '../first_components/Footer/Footer';
import { RegionInfo } from '../secondary_components/RegionInfos/RegionInfos';
import { CardsRegions } from '../secondary_components/CardsRegions/CardsRegions';
import { Separator } from '../first_components/Separator/Separator';

export const Regions = () => {
  return (
    <>
      <Header typeOfCarousel="deuxieme" />
      <NavBar />
      <Separator />
      <RegionInfo />
      <Separator />
      <CardsRegions />
      <Footer />
    </>
  );
};
