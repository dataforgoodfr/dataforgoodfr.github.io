import { Button } from "@/components/ui/button";
import qs from "qs";
import Image from "next/image";

import { getImage, getMarkdownContent, getStrapiData } from "@/lib/utils";
import { ApiHomePageHomePage } from "@/types/strapi/generated/contentTypes";

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
      members: {
        populate: {
          picture: true,
        },
      },
      partners: {
        populate: {
          logo: true,
        },
      },
    },
  });

  const apiData = await getStrapiData<ApiHomePageHomePage>(
    `home-page?${query}`
  );

  const {
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
    members,
    partners,
  } = apiData.attributes;

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
      <main className="flex-grow">
        <section className="relative h-[50vh] flex items-center justify-center">
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
          <div className="container mx-auto px-28">
            <div className="grid md:grid-cols-3 gap-6">
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
          <div className="flex items-center justify-center flex-wrap gap-8 px-32 mt-12">
            {projects?.data.map((project: typeof projects) => (
              <img
                key={project.id}
                src={getImage(project.attributes.logo)}
                alt={project.attributes.title}
                className="max-h-20 max-w-32"
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
          <div className="flex items-center justify-center flex-wrap gap-8 px-64 mt-12">
            {members?.data.map((member: typeof members) => (
              <div key={member.id} className="flex flex-col items-center">
                <Image
                  src={getImage(member.attributes.picture)}
                  alt={member.attributes.name}
                  width={150}
                  height={150}
                  className="rounded-full mb-2"
                />
                <span className="uppercase text-[#1e9aa0] font-semibold text-sm">
                  {member.attributes.name}
                </span>
                <span className="text-sm">{member.attributes.position}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12 mx-auto">
          <p className="text-3xl font-bold text-center mb-4">Nos partenaires</p>
          <div className="flex items-center justify-center flex-wrap gap-8 px-48 mt-12">
            {partners?.data.map((partner: typeof partners) => (
              <img
                key={partner.id}
                src={getImage(partner.attributes.logo)}
                alt={partner.attributes.name}
                className="max-h-20 max-w-32"
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
