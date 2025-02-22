import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ReactModal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import './form-contact.scss';

ReactModal.setAppElement('#root');

export const FormContact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showRgpdModal, setShowRgpdModal] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmModal(true);
  };

  const sendEmail = () => {
    emailjs
      .sendForm(
        'service_hdlk3qp',
        'template_9ckht79',
        form.current,
        'D_qmx7p3dICy8uYMM'
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowConfirmModal(false);
          setShowSuccessModal(true);
          setIsSent(true);
        },
        (error) => {
          console.error(error.text);
          setError("Une erreur s'est produite, veuillez réessayer.");
          setShowConfirmModal(false);
        }
      );
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
  };

  const closeConfirmModal = () => {
    setShowConfirmModal(false);
  };

  const openRgpdModal = (e) => {
    e.preventDefault();
    setShowRgpdModal(true);
  };

  const closeRgpdModal = () => {
    setShowRgpdModal(false);
  };

  const goHome = () => {
    navigate('/');
  };

  return (
    <div className="form-contact">
      {/* Modal de confirmation d'envoi */}
      <ReactModal
        isOpen={showConfirmModal}
        onRequestClose={closeConfirmModal}
        className="modal-content"
        overlayClassName="modal-overlay"
        contentLabel="Confirmation d'envoi"
      >
        <h2>Confirmation d'envoi</h2>
        <p>Voulez-vous envoyer ce message ?</p>
        <div className="modal-buttons">
          <button onClick={sendEmail}>Envoyer</button>
          <button onClick={closeConfirmModal}>Annuler</button>
        </div>
      </ReactModal>

      {/* Modal de succès */}
      <ReactModal
        isOpen={showSuccessModal}
        onRequestClose={closeSuccessModal}
        className="modal-content"
        overlayClassName="modal-overlay"
        contentLabel="Message envoyé"
      >
        <h2>Message envoyé</h2>
        <p>Votre message a été envoyé avec succès !</p>
        <button onClick={closeSuccessModal}>Fermer</button>
      </ReactModal>

      {/* Modal explicatif RGPD */}
      <ReactModal
        isOpen={showRgpdModal}
        onRequestClose={closeRgpdModal}
        className="modal-content"
        overlayClassName="modal-overlay"
        contentLabel="Informations RGPD"
      >
        <h2>Règlement Général sur la Protection des Données (RGPD)</h2>
        <p>
          Le RGPD est une réglementation européenne visant à protéger vos
          données personnelles. En cochant cette case, vous consentez à la
          collecte et au traitement de vos informations dans le seul but de
          répondre à votre demande de contact, conformément à notre politique de
          confidentialité.
        </p>
        <button onClick={closeRgpdModal}>Fermer</button>
      </ReactModal>

      {error && <p className="error-message">{error}</p>}
      {isSent ? (
        <p className="success-message">
          Votre message a été envoyé avec succès !
        </p>
      ) : (
        <form ref={form} onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="from_name">Nom</label>
            <input type="text" id="from_name" name="from_name" required />
          </div>
          <div className="form-group">
            <label htmlFor="user_email">Email</label>
            <input type="email" id="user_email" name="user_email" required />
          </div>
          <div className="form-group">
            <label htmlFor="user_phone">Téléphone</label>
            <input type="tel" id="user_phone" name="user_phone" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Sujet</label>
            <input type="text" id="subject" name="subject" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required />
          </div>
          <div className="form-group checkbox-group">
            <input type="checkbox" id="rgpd" name="rgpd" required />
            <label htmlFor="rgpd">
              J'accepte les règles RGPD (
              <a href="#" onClick={openRgpdModal}>
                En savoir plus
              </a>
              )
            </label>
          </div>
          <button type="submit">Envoyer</button>
        </form>
      )}
      <button className="back-button" onClick={goHome}>
        Retour à l'accueil
      </button>
    </div>
  );
};
