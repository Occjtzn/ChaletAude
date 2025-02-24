import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import CastleDatas from '../../datas/castles.json';
import MountainsDatas from '../../datas/mountains.json';
import AbbayesDatas from '../../datas/abbayes.json';
import EauxDatas from '../../datas/eau.json';
import SeaDatas from '../../datas/sea.json';
import './activity_details.scss';

export const ActivityDetail = () => {
  const { id } = useParams();

  const activityFromCastles = CastleDatas.find((item) => item.id === id);
  const activityFromMountains = MountainsDatas.find((item) => item.id === id);
  const activityFromAbbayes = AbbayesDatas.find((item) => item.id === id);
  const activityFromEaux = EauxDatas.find((item) => item.id === id);
  const activityFromSea = SeaDatas.find((item) => item.id === id);

  const activity =
    activityFromCastles ||
    activityFromMountains ||
    activityFromAbbayes ||
    activityFromEaux ||
    activityFromSea;

  const backLink = activityFromCastles
    ? '/Castles'
    : activityFromMountains
    ? '/Mountains'
    : activityFromAbbayes
    ? '/Abbayes'
    : activityFromEaux
    ? '/Eaux'
    : activityFromSea
    ? '/Mer'
    : '/';

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
        <Link to={backLink} className="back-button">
          ⬅ Retour aux activités
        </Link>
      </div>
    );
  }

  return (
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
        <Link to={backLink} className="back-button">
          ⬅ Retour aux activités
        </Link>
      </div>
    </div>
  );
};
