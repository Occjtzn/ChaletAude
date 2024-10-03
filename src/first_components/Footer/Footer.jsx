import './styles/footer.scss';
import { NavLink } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className="footer-container">
      <p>Les chalets d'Aude - 29 avenue de Marides - 11500 Quillan</p>
      <NavLink className="nav-footer" to="mailto:contact@chalets-aude.fr">
        contact@chalets-aude.fr
      </NavLink>
      <p>04 30 07 35 62</p>
    </div>
  );
};
