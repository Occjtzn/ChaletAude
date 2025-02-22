import { NavBar } from '../first_components/NavBar/NavBar';
import { Footer } from '../first_components/Footer/Footer';
import { Separator } from '../first_components/Separator/Separator';
import { FormContact } from '../secondary_components/FormContact/FormContact';

export const Contact = () => {
  return (
    <>
      <NavBar />
      <Separator />
      <FormContact />
      <Footer />
    </>
  );
};
