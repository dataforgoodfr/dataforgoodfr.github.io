import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";
import HomepageFeatures from "../components/HomepageFeatures";
import styles from "./index.module.css";

function HomeButton({ text, to }) {
  return (
    <div className="text--center col-sm-4">
      <Link className="button button--secondary button--lg button-home" to={to}>
        {text}
      </Link>
    </div>
  );
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      className={clsx("hero--primary", styles.heroBanner)}
      style={{
        backgroundImage: `url(${useBaseUrl("img/headerdfg.jpg")})`,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        // minHeight:"calc(100vh - 60px)",
        zIndex: 0,
        padding: "0px !important",
      }}
    >
      <div
        style={{
          backgroundColor: "rgb(10, 39, 43,0.5)",
          height: "100%",
          width: "100%",
          color: "white !important",
          "padding-top": "40px",
          "padding-bottom": "40px",
        }}
      >
        <div className="container">
          <img
            src={`${useBaseUrl("img/logo-dfg-new2.png")}`}
            style={{ width: 200, "margin-bottom": 0 }}
          />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div
            className="row"
            style={{ display: "flex", "justify-content": "center" }}
          >
            <HomeButton
              text="🌎 Découvrir l'association"
              to="https://dataforgood.notion.site"
            />
            <HomeButton text="💪 Rejoindre la communauté" to="/join" />
            <HomeButton text="💡 Proposer un projet" to="/propose" />
            <HomeButton text="🤗 Participer à la saison 12" to="/saison12" />
          </div>
        </div>
      </div>
    </header>
  );
}

const TeamMember = ({ src, name, contact, role }) => {
  return (
    <div className="member-wrapper">
      <img alt="team" className="member-img" src={`${useBaseUrl(src)}`} />
      <div>
        <h2 style={{ "align-content": "baseline" }} className="member-name">
          <a href={contact} target="_blank">
            {name}
          </a>
        </h2>
        <p className="member-role">{role}</p>
      </div>
    </div>
  );
};

const teamList = [
  {
    src: "img/team/marty.png",
    name: "Marty",
    role: "Mascotte",
    contact: "https://www.linkedin.com/company/10627994",
  },
  {
    src: "img/team/theo.jpg",
    name: "Théo Alves Da Costa",
    role: "Co-Président",
    contact: "https://www.linkedin.com/in/th%C3%A9o-alves-da-costa-09397a82/",
  },
  {
    src: "img/team/lou.jpg",
    name: "Lou Welgryn",
    role: "Co-Présidente",
    contact: "https://www.linkedin.com/in/lou-welgryn-460434b0/",
  },
  // {src:"img/team/lucile.jpg","name":"Lucile Ritchie","role":"Coordinatrice","contact":"https://www.linkedin.com/in/lucileritchie/"},
  {
    src: "img/team/benjamin.png",
    name: "Benjamin Rouif",
    role: "Bureau",
    contact: "https://www.linkedin.com/in/brouif/",
  },
  {
    src: "img/team/clement.jfif",
    name: "Clément Mayer",
    role: "Bureau",
    contact: "https://www.linkedin.com/in/cl%C3%A9ment-mayer-02a61216/",
  },
  {
    src: "img/team/ronan.jpg",
    name: "Ronan Sy",
    role: "Bureau",
    contact: "https://fr.linkedin.com/in/ronan-sy-984579a3",
  },
  // {src:"img/team/clement.jfif","name":"Clément Mayer","role":"Coordinateur","contact":"https://www.linkedin.com/in/cl%C3%A9ment-mayer-02a61216/"},
  // {src:"img/team/mickael.jpg","name":"Mickael Fine","role":"Coordinateur","contact":"https://www.linkedin.com/in/mickaelfine/"},
  // {src:"img/team/josephine.jpg","name":"Joséphine Lecoq-Vallon","role":"Responsable de la communauté","contact":"https://www.linkedin.com/in/josephine-lecoq-vallon/"},
  // {src:"img/team/julie.png","name":"Julie Jouvencel","role":"Coordinatrice","contact":"https://www.linkedin.com/in/juliejouvencel/"},
  // {src:"img/team/margaux.jpg","name":"Margaux David","role":"Designeuse","contact":"https://www.linkedin.com/in/margauxdavid/"},
  // {src:"img/team/eloi.png","name":"Eloi Pérignon","role":"Communication & RP","contact":"https://www.linkedin.com/in/eloi-perignon/"},
  // {src:"img/team/fred.png","name":"Frédéric Bardolle","role":"Conseil des sages","contact":"https://www.linkedin.com/in/fbardolle/"},
];

const SectionTeam = () => {
  return (
    <div
      className=""
      style={{
        display: "flex",
        "align-items": "flex-start",
        "justify-content": "center",
        "flex-wrap": "wrap",
        "margin-top": "50px",
      }}
    >
      {teamList.map((el) => (
        <TeamMember
          src={el.src}
          name={el.name}
          contact={el.contact}
          role={el.role}
        />
      ))}
    </div>
  );
};

const Partner = ({ src, url }) => {
  return (
    <div className="logo-partner-wrapper">
      <a href={url} target="_blank">
        <img
          alt="partner"
          className="logo-partner"
          src={`${useBaseUrl(src)}`}
        />
      </a>
    </div>
  );
};

const partnersList = [
  { src: "img/partners/latitudes.png", url: "https://www.latitudes.cc/" },
  { src: "img/partners/labelia.jpg", url: "https://www.labelia.org/" },
  { src: "img/partners/vendredi.png", url: "https://www.vendredi.cc/" },
  { src: "img/partners/bayes.png", url: "https://www.bayesimpact.org/en/" },
  { src: "img/partners/datagen.png", url: "https://www.datageneration.co/" },
  { src: "img/partners/eclaircies.png", url: "https://eclaircies.co/" },
  {
    src: "img/partners/soscience.png",
    url: "https://www.soscience.org/en/home-2/",
  },
  { src: "img/partners/jogl.png", url: "https://jogl.io/" },
  { src: "img/partners/lll.png", url: "https://www.liberte.paris/" },
  { src: "img/partners/lewagon.png", url: "https://www.lewagon.com/" },
  { src: "img/partners/etalab.png", url: "https://www.etalab.gouv.fr/" },
  {
    src: "img/partners/dinum.png",
    url: "https://www.numerique.gouv.fr/dinum/",
  },
  { src: "img/partners/mtes.png", url: "https://www.ecologie.gouv.fr/" },
  { src: "img/partners/mtp.png", url: "https://www.transformation.gouv.fr/" },
  { src: "img/partners/mif.png", url: "https://www.impactfrance.eco/" },
  {
    src: "img/partners/tfgf.png",
    url: "https://www.impactfrance.eco/communautes-thematiques/tech-for-good",
  },
  { src: "img/partners/verteco.png", url: "https://vert.eco/" },
  { src: "img/partners/lemonde.png", url: "https://lemonde.fr/" },
  {
    src: "img/partners/coalition.png",
    url: "https://www.coalitiontechforgood.fr/",
  },
  { src: "img/partners/shareit.png", url: "https://www.share-it.io/" },
  { src: "img/partners/athom.jfif", url: "https://athom.co/" },
  {
    src: "img/partners/fantastiquebazar.jpg",
    url: "https://fantastiquebazar.com/",
  },
  { src: "img/partners/simplon.png", url: "https://www.simplonprod.co/" },
  { src: "img/partners/numerikea.png", url: "https://www.numerik-ea.fr/" },
  { src: "img/partners/solidatech.jpg", url: "https://www.solidatech.fr/" },
  { src: "img/partners/qarnot.png", url: "https://qarnot.com/fr" },
];

const SectionPartners = () => {
  return (
    <div
      className=""
      style={{
        display: "flex",
        "align-items": "center",
        "justify-content": "center",
        "flex-wrap": "wrap",
        "margin-top": "50px",
      }}
    >
      {partnersList.map((el) => (
        <Partner src={el.src} url={el.url} />
      ))}
    </div>
  );
};

const Project = ({ src, url }) => {
  return (
    <div className="logo-partner-wrapper">
      <Link to={url}>
        <img
          alt="project"
          className="logo-partner"
          src={`${useBaseUrl(src)}`}
        />
      </Link>
    </div>
  );
};

const projectsList = [
  { src: "img/projects/logos/off.png", url: "" },
  { src: "img/projects/logos/ceebios.jpg", url: "/projects/ceebios" },
  { src: "img/projects/logos/labelia.jpg", url: "/projects/labelia" },
  { src: "img/projects/logos/cc.png", url: "" },
  { src: "img/projects/logos/pyro.png", url: "/projects/pyronear" },
  { src: "img/projects/logos/2tonnes.png", url: "" },
  { src: "img/projects/logos/ogre.png", url: "" },
  {
    src: "img/projects/logos/climatechance.jpg",
    url: "/projects/climatechance",
  },
  { src: "img/projects/logos/mtes.png", url: "" },
  { src: "img/projects/logos/ads.jpg", url: "" },
  { src: "img/projects/logos/bloom.jpg", url: "" },
  { src: "img/projects/logos/c4.png", url: "" },
  { src: "img/projects/logos/arkhn.png", url: "" },
  { src: "img/partners/shift.png", url: "/projects/shiftdataportal" },
  { src: "img/projects/logos/bechdelai.png", url: "/projects/bechdelai" },
  { src: "img/projects/logos/imagine2050.png", url: "/projects/imagineai" },
  { src: "img/projects/logos/quotaclimat.png", url: "/projects/quotaclimat" },
  { src: "img/projects/logos/greniers.png", url: "" },
  { src: "img/projects/logos/ign.png", url: "" },
  { src: "img/projects/logos/jogl.png", url: "" },
  { src: "img/projects/logos/ldc.jpg", url: "" },
  { src: "img/projects/logos/acf.png", url: "" },
  { src: "img/projects/logos/phenix.jpg", url: "" },
  { src: "img/projects/logos/sf.png", url: "" },
  { src: "img/projects/logos/sr.png", url: "" },
  { src: "img/projects/logos/tmrow.png", url: "" },
  { src: "img/projects/logos/wb.png", url: "" },
  { src: "img/projects/logos/lcr.jpg", url: "" },
];

const SectionProjects = () => {
  return (
    <div
      className=""
      style={{
        display: "flex",
        "align-items": "center",
        "justify-content": "center",
        "flex-wrap": "wrap",
        "margin-top": "50px",
      }}
    >
      {projectsList.map((el) => (
        <Project src={el.src} url={el.url} />
      ))}
    </div>
  );
};

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Data For Good - le numérique pour l'intérêt général"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />

        {/* <section>
          <div className="container main-section">
            <h1>Les news</h1>
            <h2>Lancement de la saison 11 de Data For Good le samedi 25 mars à 14h</h2>
            <p>Inscriptions sur <a href="https://app.livestorm.co/data-for-good/saison11?type=detailed" target="_blank">Livestorm</a> ou juste ici 👇</p>
            <iframe width="100%" height="480" frameborder="0" src="https://app.livestorm.co/p/cb35fa4d-8db9-40f5-a558-baf41586a818/form" title="Lancement saison 11 Data For Good | Data For Good"></iframe>
          </div>  
        </section> */}

        <section className="light-green">
          <div className="container main-section">
            <h1>L'association Data For Good</h1>
            <div className="row">
              <div className="col col--6">
                <img
                  src={`${useBaseUrl("img/events.jpg")}`}
                  alt="dfg-demoday"
                  style={{ width: "100%", "margin-bottom": "20px" }}
                />
              </div>
              <div
                className="col col--6"
                style={{ "text-align": "left", "align-content": "center" }}
              >
                <p>
                  Data For Good est une association loi 1901 (
                  <i>100% bénévole, 100% open-source, 100% citoyenne</i>) créée
                  en 2014 qui rassemble une communauté de{" "}
                  <b>4000+ volontaires</b> tech (Data Scientists, Data Analysts,
                  Data Engineers, Developers, UX/UI Designers, Product & Project
                  Owners) souhaitant mettre leurs compétences au profit
                  d'associations, d'ONG, et de l'ESS - et de s'engager pour
                  l'intérêt général.
                </p>
                <p>
                  Nous réalisons chaque année des{" "}
                  <b>
                    saisons d'accélération où une dizaine de projets sont
                    accompagnés par les bénévoles sur des thématiques sociales,
                    sociétales et environnementales
                  </b>
                  . Nous avons ainsi accompagné, accéléré et co-construits plus
                  de <Link to="/projects">100 projets</Link> depuis 2014.
                </p>
                <p>
                  Nous sommes également fervents{" "}
                  <b>critiques des risques et des dérives de la technologie</b>,
                  faire partie de la communauté est aussi s'engager pour une
                  technologie sobre et respectueuse des enjeux sociaux et
                  environnementaux, et accepter que la technologie n'est pas la
                  solution à tous les problèmes.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container main-section">
            <h1>Les projets Data For Good</h1>
            <p>
              Plus d'informations dans la page{" "}
              <Link to="/projects">🔥 Projets</Link>
            </p>
            <SectionProjects />
          </div>
        </section>
        <section className="light-green">
          <div className="container main-section">
            <h1>L'équipe Data For Good</h1>
            <p>
              🖐 Vous pouvez contacter l'équipe à{" "}
              <Link to="mailto:hellodataforgood@gmail.com">
                hellodataforgood@gmail.com
              </Link>
            </p>
            <SectionTeam />
          </div>
        </section>
        <section>
          <div className="container main-section">
            <h1>Nos partenaires</h1>
            <SectionPartners />
          </div>
        </section>
      </main>
    </Layout>
  );
}
