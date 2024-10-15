import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Chalets from '../../datas/chalets.json';
import './styles/navbar.scss';

export const NavLinks = () => {
  useEffect(() => {
    const navLinks = document.querySelectorAll('.nav-link');

    function handleToggleClass(e) {
      navLinks.forEach((link) => {
        link.classList.remove('active');
      });

      e.target.classList.add('active');
    }

    navLinks.forEach((link) => {
      link.addEventListener('click', handleToggleClass);
    });
  }, []);

  return (
    <div className="nav-container">
      <p>—</p>
      {Chalets.map((chalet) => (
        <NavLink
          key={chalet.id}
          className="nav-chalet nav-link"
          to={`/chalet/${chalet.id}`}
        >
          {chalet.NavLink}
        </NavLink>
      ))}
      <NavLink className="nav-region nav-link" to="/Regions">
        Notre Région
      </NavLink>
      <NavLink className="nav-contact nav-link" to="/Contact">
        Contact
      </NavLink>
      <p>—</p>
    </div>
  );
};
