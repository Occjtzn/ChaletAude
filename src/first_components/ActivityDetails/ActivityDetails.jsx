import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import CastleDatas from '../../datas/castles.json';
import MountainsDatas from '../../datas/mountains.json';
import './activity_details.scss';

export const ActivityDetail = () => {
  const { id } = useParams();
  const activity =
    CastleDatas.find((item) => item.id === id) ||
    MountainsDatas.find((item) => item.id === id);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!activity || !activity.images || activity.images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % activity.images.length
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [activity]);

  if (!activity) {
    return (
      <div className="error-message">
        <h1>❌ Activité non trouvée</h1>
        <Link to="/Castles" className="back-button">
          ⬅ Retour aux activités
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="activity-detail-container">
        <h1 className="activity-title">{activity.title}</h1>
        <div className="image-container">
          <img
            src={activity.images[currentImageIndex]}
            alt={activity.title}
            className="detail-image"
          />
        </div>
        <p className="activity-description">{activity.description}</p>
        <div className="activity-menus">
          <p className="activity-time">⏳ Temps estimé : {activity.temps}</p>
          {activity.mapIframe && (
            <div
              className="map-container"
              dangerouslySetInnerHTML={{ __html: activity.mapIframe }}
            />
          )}
          <a
            href={activity.link}
            target="_blank"
            rel="noopener noreferrer"
            className="activity-link"
          >
            Site Web
          </a>
          <Link to="/Castles" className="back-button">
            ⬅ Retour aux activités
          </Link>
        </div>
      </div>
    </>
  );
};
