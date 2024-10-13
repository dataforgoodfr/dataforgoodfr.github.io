import { ExternalLinkIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-24">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="font-bold mb-4">Pages</h3>
            <ul className="text-gray-500 gap-2">
              <li className="flex items-center gap-1">
                <Link href="https://dataforgood.notion.site/">
                  L'association Data For Good
                </Link>
              </li>
              <li className="flex items-center gap-1">
                <Link href="https://dataforgood.fr/hippocrate">
                  Serment d'Hippocrate
                </Link>
              </li>
              <li className="flex items-center gap-1">
                <Link href="https://dataforgood.notion.site/f58df2b6f02849a4ae94d8cb9ce49e5f?v=c165effdeeb140ea9fe964ca966485a6">
                  FAQ
                </Link>
              </li>
              <li className="flex items-center gap-1">
                <Link href="https://dataforgood.fr/confidentialite">
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className=" font-bold mb-4">Liens Externes</h3>
            <ul className="text-gray-500">
              <li className="flex items-center gap-1">
                <Link href="https://github.com/dataforgoodfr">Github</Link>
                <ExternalLinkIcon />
              </li>
              <li className="flex items-center gap-1">
                <Link href="https://www.youtube.com/channel/UCA_utdbmVhAOFujulWlaaCQ">
                  Youtube
                </Link>
                <ExternalLinkIcon />
              </li>
              <li className="flex items-center gap-1">
                <Link href="https://www.meetup.com/Data-for-Good-FR">
                  Meetip
                </Link>
                <ExternalLinkIcon />
              </li>
              <li className="flex items-center gap-1">
                <Link href="https://huggingface.co/DataForGood">
                  Hugging Face
                </Link>
                <ExternalLinkIcon />
              </li>
              <li className="flex items-center gap-1">
                <Link href="https://twitch.tv/dataforgood">Twitch</Link>
                <ExternalLinkIcon />
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className=" font-bold mb-4">Mais aussi</h3>
            <ul className="text-gray-500">
              <li className="flex items-center gap-1">
                <Link href="/blog">Blog</Link>
              </li>
              <li className="flex items-center gap-1">
                <Link href="https://dataforgood.notion.site/">Notion</Link>
                <ExternalLinkIcon />
              </li>
              <li className="flex items-center gap-1">
                <Link href="https://www.linkedin.com/company/dataforgood">
                  Linkedin
                </Link>
                <ExternalLinkIcon />
              </li>
              <li className="flex items-center gap-1">
                <Link href="https://www.instagram.com/dataforgoodfr/">
                  Instagram
                </Link>
                <ExternalLinkIcon />
              </li>
              <li className="flex items-center gap-1">
                <Link href="https://twitter.com/dataforgood_fr">Twitter</Link>
                <ExternalLinkIcon />
              </li>
            </ul>
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
  );
}
