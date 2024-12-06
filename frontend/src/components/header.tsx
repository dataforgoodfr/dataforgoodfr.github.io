import Link from "next/link";
import { MainMenu } from "./main-menu";
import { Button } from "./ui/button";
import Image from "next/image";
import qs from "qs";
import { getImage, getStrapiData } from "@/lib/utils";
import { ApiHomePageHomePage } from "@/types/strapi/generated/contentTypes";

export async function Header() {
  const query = qs.stringify({
    populate: {
      logo: true,
    },
  });

  const apiData = await getStrapiData<ApiHomePageHomePage>(
    `home-page?${query}`
  );
  const { title, logo } = apiData;

  const logoImage = getImage(logo);

  return (
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
  );
}
