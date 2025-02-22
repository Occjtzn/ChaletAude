import React from 'react';
import './error.scss';
import { NavLink } from 'react-router-dom';
import { Footer } from '../Footer/Footer';

export const ErrorPage = () => {
  return (
    <>
      <div className="error-wrapper">
        <div className="error-container">
          <h1>404</h1>
          <p>Oups! La page que vous demandez n'existe pas.</p>
          <NavLink className="nav-return-home" to="/">
            Retourner sur la page d’accueil
          </NavLink>
        </div>
      </div>
      <Footer />
    </>
  );
};
