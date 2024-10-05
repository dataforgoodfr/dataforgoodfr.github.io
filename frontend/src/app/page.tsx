import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";
import { getImage, getMarkdownContent, getStrapiData } from "@/lib/utils";
import { Users, Lightbulb, Heart, GraduationCap, Globe } from "lucide-react";
import { ApiHomePageHomePage } from "@/types/strapi/generated/contentTypes";
import { MainMenu } from "@/components/main-menu";

export default async function Homepage() {
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
  } = await getStrapiData<ApiHomePageHomePage>(
    "home-page?populate=hero&populate=logo"
  );

  const logoImage = getImage(logo);
  const heroImage = getImage(hero);

  const formattedVisionDescription =
    await getMarkdownContent(vision_description);
  const formattedMissionDescription =
    await getMarkdownContent(mission_description);
  const formattedValuesDescription =
    await getMarkdownContent(values_description);

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
        <section className="relative h-[55vh] flex items-center justify-center">
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
            <div className="grid md:grid-cols-3 gap-8">
              <div className="">
                <h2 className="text-2xl font-bold mb-4">Notre vision</h2>
                <div
                  className="text-md"
                  dangerouslySetInnerHTML={{
                    __html: formattedVisionDescription,
                  }}
                />
              </div>
              <div className="">
                <h2 className="text-2xl font-bold mb-4">Notre mission</h2>
                <div
                  className="text-md"
                  dangerouslySetInnerHTML={{
                    __html: formattedMissionDescription,
                  }}
                />
              </div>
              <div className="">
                <h2 className="text-2xl font-bold mb-4">Nos valeurs</h2>
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

        <section className="py-16 bg-[#f4f4f4]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-[#35c4d7]">
              Nos Domaines d'Action
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Heart,
                  title: "Santé",
                  description:
                    "Améliorer l'accès aux soins et le bien-être pour tous.",
                },
                {
                  icon: Globe,
                  title: "Environnement",
                  description:
                    "Lutter contre le changement climatique et protéger notre planète.",
                },
                {
                  icon: Users,
                  title: "Inclusion Sociale",
                  description:
                    "Promouvoir l'égalité et l'inclusivité dans nos communautés.",
                },
                {
                  icon: GraduationCap,
                  title: "Éducation",
                  description:
                    "Développer les compétences et les opportunités d'apprentissage.",
                },
                {
                  icon: Lightbulb,
                  title: "Citoyenneté",
                  description:
                    "Encourager la participation active dans la vie civique.",
                },
              ].map((domain, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md text-center"
                >
                  <domain.icon className="h-12 w-12 text-[#fca311] mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">{domain.title}</h3>
                  <p className="text-gray-600">{domain.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#35c4d7] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Rejoignez Notre Communauté
            </h2>
            <p className="mb-8 max-w-2xl mx-auto">
              Prêt à faire la différence ? Rejoignez Data For Good et commencez
              à collaborer sur des projets qui comptent. Ensemble, nous pouvons
              créer un impact positif sur le monde qui nous entoure.
            </p>
            <form className="max-w-md mx-auto flex gap-4">
              <Input
                type="email"
                placeholder="Votre adresse email"
                className="flex-grow"
              />
              <Button
                type="submit"
                className="bg-[#fca311] text-white hover:bg-[#fca311]/90"
              >
                S'inscrire
              </Button>
            </form>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-[#35c4d7]">
              L'équipe Data For Good
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Léa", role: "Co-fondatrice" },
                { name: "Thomas", role: "Développeur" },
                { name: "Marie", role: "Designer" },
              ].map((member, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-6 rounded-lg text-center"
                >
                  <Image
                    src="/path/to/team-member.jpg"
                    alt={member.name}
                    width={100}
                    height={100}
                    className="mx-auto mb-4 rounded-full"
                  />
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#f4f4f4]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-[#35c4d7]">
              Nos Partenaires
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["logo1.png", "logo2.png", "logo3.png", "logo4.png"].map(
                (logo, index) => (
                  <Image
                    key={index}
                    src={`/path/to/${logo}`}
                    alt={`Partenaire ${index + 1}`}
                    width={150}
                    height={100}
                    className="mx-auto"
                  />
                )
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-4">Data For Good</h3>
              <p>Accélérateur citoyen d'intérêt général</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-4">Liens Rapides</h3>
              <ul>
                <li>
                  <Link href="#" className="hover:text-[#35c4d7]">
                    Qui sommes-nous ?
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#35c4d7]">
                    Projets
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#35c4d7]">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#35c4d7]">
                    IA Générative
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h3 className="text-xl font-bold mb-4">Nous Contacter</h3>
              <p>Email: contact@dataforgood.fr</p>
              <div className="mt-4 flex space-x-4">
                {/* Add social media icons here */}
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            <p>© 2024 Data For Good. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
