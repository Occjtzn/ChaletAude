import { useLocation } from 'react-router-dom';
import './info-page.scss';

export const InfoPage = () => {
  const locationInfo = useLocation();

  const infoContent = () => {
    switch (locationInfo.pathname) {
      case '/':
        return (
          <p>
            Au cœur des paysages enchanteurs de l’Aude, Quillan, Station Verte,
            se présente comme un véritable écrin de découvertes. Ici, chaque pas
            résonne avec la promesse d’aventures uniques, offrant un éventail
            d'activités pour petits et grands, pour les passionnés de nature
            comme pour les amateurs de culture.
            <br />
            Les chalets que nous vous proposons se déploient sur un terrain
            verdoyant, enveloppés de tranquillité et de sérénité. À seulement
            600 mètres des commerces essentiels (boulangerie, pharmacie,
            boucherie, et bien d'autres) le centre-ville s'ouvre à vous,
            accessible en toute simplicité, prêt à vous accueillir dans son
            ambiance chaleureuse.
          </p>
        );
      case '/Regions':
        return (
          <p>
            Dans le cœur vibrant de l’Aude, chaque pas résonne avec les échos
            d’histoires anciennes. Laissez-vous enivrer par les senteurs
            enivrantes de la garrigue, où les herbes aromatiques dansent sous la
            caresse du vent chaud. Les vignobles dorés, à perte de vue,
            promettent des découvertes gustatives dans un cadre idyllique.
            <br />
            Au détour des ruelles des villages médiévaux, le temps semble
            suspendu, chaque pierre racontant un récit d’autrefois. Les châteaux
            majestueux, sentinelles d’un passé glorieux, invitent à l’aventure,
            tandis que les rivières scintillantes serpentent à travers des
            paysages à couper le souffle.
            <br />
            Et quand le soleil se couche, l’horizon s’embrase de couleurs
            chatoyantes, peignant un tableau vivant qui invite à
            l’émerveillement. L’Aude n’est pas seulement une région, c’est une
            invitation à explorer, à savourer et à se perdre dans sa beauté
            authentique. Venez vivre cette expérience unique, où chaque instant
            est une promesse de magie et de convivialité.
          </p>
        );
      case '/Castles':
        return (
          <p>
            Au cœur des terres mystérieuses de l’Aude, les châteaux cathares se
            dressent fièrement, témoins d'une histoire fascinante et d'une
            époque empreinte de légendes. Dominant des paysages spectaculaires,
            ces forteresses offrent une plongée dans le passé, où chaque pierre
            raconte la résistance et la foi des Cathares. <br /> Découvrez ces
            majestueux bastions perchés sur des pitons rocheux, entourés de
            panoramas à couper le souffle. De Quéribus à Montségur, chaque
            château offre une aventure unique, mêlant histoire, nature et
            mystère, le tout dans un écrin de sérénité où l'esprit vagabonde
            librement à travers les siècles.
          </p>
        );
      case '/Mountains':
        return (
          <p>
            Au cœur des paysages enchanteurs de l’Aude, les montagnes s'élèvent
            majestueusement, gardiennes d'une nature sauvage et préservée. Ce
            massif offre une palette de panoramas époustouflants, où les sommets
            se mêlent aux vallées verdoyantes, créant un tableau vivant de
            beauté naturelle.
            <br /> Partez à la découverte de ces sentiers sinueux qui serpentent
            à travers des forêts denses et des prairies fleuries, chaque pas
            vous rapprochant d'une faune et d'une flore d'une richesse inouïe.
            Les falaises abruptes et les parois rocheuses attirent les
            passionnés d'escalade, offrant des défis variés aux aventuriers en
            quête de sensations fortes. Des crêtes des Corbières aux hauteurs
            des Pyrénées, chaque montagne raconte une histoire, celle des hommes
            qui les ont foulées et des traditions qui les entourent. Ici,
            l'aventure et la tranquillité s'entrelacent, offrant un havre de
            paix pour les randonneurs, les grimpeurs, les rêveurs et les
            amoureux de la nature.
          </p>
        );
      default:
        return <p>Contenu inexistant pour la page</p>;
    }
  };
  return <div className="info-page-container">{infoContent()}</div>;
};
