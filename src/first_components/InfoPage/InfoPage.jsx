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
      case '/Abbayes':
        return (
          <p>
            Nichées au cœur des paysages authentiques du Sud, les abbayes
            d’Occitanie racontent une histoire millénaire, imprégnée de
            spiritualité et de traditions. Témoins d’un patrimoine d’exception,
            ces édifices majestueux invitent à un voyage hors du temps, où
            l’architecture romane et gothique se mêle à la quiétude des jardins
            et cloîtres séculaires.
            <br />
            Que vous soyez amateur d’histoire, passionné de culture ou en quête
            de sérénité, ces lieux emblématiques vous ouvrent leurs portes. De
            l’Abbaye de Fontfroide à celle de Saint-Papoul, chaque visite est
            une immersion dans un passé fascinant, où pierres et paysages
            dialoguent en parfaite harmonie.
          </p>
        );
      case '/Eaux':
        return (
          <p>
            Au cœur des paysages préservés de l’Aude, l’eau façonne des décors
            d’exception et invite à une multitude d’aventures. Des rivières aux
            lacs paisibles, chaque site révèle une facette unique, entre
            sensations fortes et instants de quiétude.
            <br />
            Que vous soyez amateur de frissons ou en quête de détente, les
            activités aquatiques de l’Aude sauront vous séduire. Rafting et
            canyoning dans les gorges sauvages, canoë au fil des eaux vives,
            baignade rafraîchissante dans des lacs aux reflets émeraude… Ici, la
            nature est un terrain de jeu grandeur nature, offrant des
            expériences aussi variées qu’inoubliables.
          </p>
        );
      case '/Mer':
        return (
          <p>
            Le littoral occitan dévoile un paysage où la mer et la terre se
            rencontrent dans une harmonie envoûtante. Entre vastes étendues de
            sable fin, lagunes scintillantes et criques sauvages, chaque rivage
            offre une invitation à l’évasion et à la contemplation.
            <br />
            Laissez-vous porter par la douceur du vent marin, explorez les
            sentiers côtiers serpentant entre les dunes et les pinèdes, et
            découvrez une biodiversité exceptionnelle nichée au creux des étangs
            et des marais. Les ports pittoresques et les villages de pêcheurs
            racontent l’histoire d’un littoral façonné par les vagues et les
            traditions, où la culture maritime résonne dans chaque ruelle,
            chaque marché, chaque assiette de fruits de mer fraîchement pêchés.
            <br />
            Ici, le temps semble suspendu entre le bleu infini de la
            Méditerranée et l’or éclatant des plages baignées de soleil. Que
            vous soyez amateur de sports nautiques, passionné de nature ou
            simplement en quête de sérénité, le littoral occitan vous offre un
            refuge, un instant de liberté, un horizon à perte de vue.
          </p>
        );
      default:
        return <p>Contenu inexistant pour la page</p>;
    }
  };
  return <div className="info-page-container">{infoContent()}</div>;
};
