import { Logo } from './Logo';
import { NavLinks } from './NavLinks';
import './styles/navbar.scss';

export const NavBar = () => {
  return (
    <>
      <div className="navbar-container">
        <Logo />
        <NavLinks />
      </div>
    </>
  );
};
