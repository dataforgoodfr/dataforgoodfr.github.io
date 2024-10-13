import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import qs from "qs";
import Link from "next/link";
import Image from "next/image";
import { getImage, getMarkdownContent, getStrapiData } from "@/lib/utils";
import CommunitySection from "@/components/CommunitySection";
import TeamSection from "@/components/TeamSection";
import PartnersSection from "@/components/PartnersSection";
import { ApiHomePageHomePage } from "@/types/strapi/generated/contentTypes";
import { MainMenu } from "@/components/main-menu";

export default async function Homepage() {
  const query = qs.stringify({
    populate: {
      hero: true,
      logo: true,
      projects: {
        populate: {
          logo: true,
        },
      },
    },
  });

  const {
    title,
    description,
    hero,
    logo,
    cta_join,
    cta_projects,
    cta_donation,
    vision_description,
    mission_description,
    values_description,
    association_description,
    projects,
    team_members,
    partners,
  } = await getStrapiData<ApiHomePageHomePage>(`home-page?${query}`);

  const logoImage = getImage(logo);
  const heroImage = getImage(hero);

  const formattedVisionDescription =
    await getMarkdownContent(vision_description);
  const formattedMissionDescription =
    await getMarkdownContent(mission_description);
  const formattedValuesDescription =
    await getMarkdownContent(values_description);
  const formattedAssociationDescription = await getMarkdownContent(
    association_description
  );

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white py-2 px-6 flex items-center justify-between">
        <div className="flex gap-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image src={logoImage} alt="Data For Good" width={30} height={30} />
            <span className="font-bold">{title}</span>
          </Link>
          <MainMenu />
        </div>
        <div className="flex space-x-2">
          <Button className="bg-[#35c4d7] text-white hover:bg-[#35c4d7]/90">
            Rejoindre la communauté
          </Button>
          <Button
            variant="outline"
            className="border-[#35c4d7] text-[#35c4d7] hover:bg-[#35c4d7] hover:text-white"
          >
            Proposer un projet
          </Button>
        </div>
      </header>

      <main className="flex-grow">
        <section className="relative h-[48vh] flex items-center justify-center">
          <Image
            src={heroImage}
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 z-0"
          />
          <div className="relative z-10 text-center text-white">
            <Image
              src={logoImage}
              alt="Data For Good"
              width={200}
              height={200}
              className="mx-auto mb-6"
            />
            <h1 className="text-4xl font-bold mb-4">Data For Good</h1>
            <p className="text-2xl mb-8">{description}</p>
            <div className="grid grid-cols-3 gap-4">
              <Button
                size="lg"
                className="bg-[#cce03d] text-black hover:bg-[#cce03d]/90 font-bold"
              >
                {cta_join}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-black hover:bg-white/90 hover:text-gray-600 font-bold"
              >
                {cta_projects}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#fca311] bg-[#fca311] text-white hover:bg-[#fca311]/90 font-bold"
              >
                {cta_donation}
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="max-w-sm">
                <h2 className="text-2xl font-bold mb-4 text-center">
                  Notre vision
                </h2>
                <div
                  className="text-md"
                  dangerouslySetInnerHTML={{
                    __html: formattedVisionDescription,
                  }}
                />
              </div>
              <div className="max-w-sm">
                <h2 className="text-2xl font-bold mb-4 text-center">
                  Notre mission
                </h2>
                <div
                  className="text-md"
                  dangerouslySetInnerHTML={{
                    __html: formattedMissionDescription,
                  }}
                />
              </div>
              <div className="max-w-sm">
                <h2 className="text-2xl font-bold mb-4 text-center">
                  Nos valeurs
                </h2>
                <div
                  className="text-md"
                  dangerouslySetInnerHTML={{
                    __html: formattedValuesDescription,
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 container mx-auto">
          <p className="text-3xl font-bold text-center mb-2">Les news</p>
          <p className="text-lg font-bold text-center mb-2">
            La Saison 12 Data For Good
          </p>
          <p className="text-center">
            La saison 12 de Data For Good a commencé (3 mois entre le 3 février
            2024 et fin avril), retrouvez toutes les informations sur cette page
          </p>
          <img
            src="https://dataforgood.fr/img/saison12.png"
            alt="News"
            className="w-full mt-8 px-12"
          />
        </section>

        <section className="py-12 mx-auto lg:px-64 bg-gradient-to-b from-white via-[#f5f9d8] to-white">
          <p className="text-3xl font-bold text-center mb-4">
            L'association Data For Good
          </p>
          <div className="grid grid-cols-2 gap-8">
            <Image
              src="https://dataforgood.fr/img/events.jpg"
              alt="Events"
              width={500}
              height={300}
            />
            <div
              className="text-md"
              dangerouslySetInnerHTML={{
                __html: formattedAssociationDescription,
              }}
            />
          </div>
        </section>

        <section className="py-12 container mx-auto">
          <p className="text-3xl font-bold text-center mb-4">
            Les projets Data For Good
          </p>
          <p className="text-center">
            Plus d'informations dans la page projets
          </p>
          <div className="flex items-center justify-center flex-wrap gap-8 px-64 mt-12">
            {projects?.data.map((project: typeof projects) => (
              <img
                key={project.attributes.id}
                src={getImage(project.attributes.logo)}
                alt={project.attributes.title}
                className="max-h-14"
              />
            ))}
          </div>
        </section>

        <section className="py-12 mx-auto bg-gradient-to-b from-white via-[#f5f9d8] to-white">
          <p className="text-3xl font-bold text-center mb-4">
            L'équipe Data For Good
          </p>
          <p className="text-center">
            🖐 Vous pouvez contacter l'équipe à hellodataforgood@gmail.com
          </p>
          <div className="flex gap-4"></div>
        </section>

        <section className="py-12 container">
          <p className="text-3xl font-bold text-center mb-4">Nos partenaires</p>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-4">Pages</h3>
              <p>Accélérateur citoyen d'intérêt général</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-4">Liens Externes</h3>
              <ul>
                <li>
                  <Link href="GitHub">Github</Link>
                </li>
                <li>
                  <Link href="#">Youtube</Link>
                </li>
                <li>
                  <Link href="#">Blog</Link>
                </li>
                <li>
                  <Link href="#">IA Générative</Link>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h3 className="text-xl font-bold mb-4">Mais aussi</h3>
              <p>Email: contact@dataforgood.fr</p>
              <div className="mt-4 flex space-x-4">
                {/* Add social media icons here */}
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            <p>
              Copyright © {new Date().getFullYear()} Data For Good - Avec amour
              depuis 2014 ❤ - contact à hellodataforgood@gmail.com
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}