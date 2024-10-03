import { NavLink } from 'react-router-dom';
import ChaletLogo from '../../assets/pictures/Logo/logo-chalets-aude.webp';
import './styles/navbar.scss';

export const Logo = () => {
  return (
    <NavLink to="/" className="logo-container">
      <img className="logo-img" src={ChaletLogo} alt="Logo" />
    </NavLink>
  );
};
