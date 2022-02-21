import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Notre vision',
    src: require('../../static/img/pillar1.png').default,
    Svg: require('../../static/img/pillar1.svg').default,
    description: (
      <>
        <p style={{"text-align":"left"}}>Les technologies numériques sont incroyablement puissantes et redéfinissent le fonctionnement de notre société. Pour les acteurs qui œuvrent pour l'intérêt général, la technologie peut parfois être un levier démutiplicateur d'impacts positifs, cependant et malheureusement ces acteurs n'ont souvent pas les ressources technologiques ou humaines pour accélérer leur action citoyenne. <b>Data for Good existe pour rétablir l'équilibre.</b></p>
        <p style={{"text-align":"left"}}><i>*Citoyens, associations, ONGs, institutions publiques et entreprises à fort impact social, environnemental et solidaire.</i></p>
      </>
    ),
  },
  {
    title: 'Notre mission',
    src: require('../../static/img/pillar2.png').default,
    Svg: require('../../static/img/pillar2.svg').default,
    description: (
      <>
        <p style={{"text-align":"left"}}>Chaque jour, de nouveaux défis sont à relever en matière de <b>santé, d'environnement, d'inclusion sociale, d'éducation ou de citoyenneté</b>. Et chaque jour, de nouvelles idées germent et de plus en plus de citoyens veulent s'engager.</p>
        <p style={{"text-align":"left"}}>La communauté Data for Good rassemble celles et ceux qui veulent façonner des projets concrets et sur mesure en réponse à ces défis. Elle offre un cadre vivant et bienveillant où ces projets éclosent, mûrissent et se déploient.</p>
        <p style={{"text-align":"left"}}>Jeff Hammerbacher regrettait : <i>"The best minds of my generation are thinking about how to make people click ads. That sucks."</i> - C'est pour cette raison que nous rassemblons la communauté Data For Good, pour rediriger l'énergie créatrice vers l'intérêt général et la création de communs.</p>
      </>
    ),
  },
  {
    title: 'Nos valeurs',
    src: require('../../static/img/pillar3.png').default,
    Svg: require('../../static/img/pillar3.svg').default,
    description: (
      <>
        <ul style={{"text-align":"left"}}>
          <li><b>Des optimistes pragmatiques</b> – qui s'engagent à résoudre de vrais problèmes à travers une méthode d'accompagnement ascendante et itérative.</li>
          <li><b>Des artisans de l'open source</b> – qui veulent que les progrès des uns puissent être réutilisés pour faire avancer les autres. Tout contenu produit au sein des projets (code, visuels, documentation, etc.) est publié sous une licence libre.</li>
          <li><b>Des hackers indépendants</b> – qui ont choisi d'être 100% bénévoles pour conserver toute liberté dans leur prise de décisions.</li>
          <li><b>Un collectif de bâtisseurs</b> – qui veulent construire brique par brique le monde de demain.</li>
          <li><b>Des auto-critiques</b> – qui ont conscience que la technologie n'est pas la réponse à tout, qui reconnaissent et cherchent à limiter les impacts négatifs de ce qu'ils créent, et qui refusent de faire de la technologie pour faire de la technologie</li>
        </ul>
      </>
    ),
  },
];

function Feature({Svg, title, description,src}) {
  return (
    <div className={clsx('col col--4')}>
      {/* <div className="text--center">
        <img src={src} className={styles.featureSvg}/>
      </div> */}
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
