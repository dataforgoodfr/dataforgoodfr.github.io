"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const menu = [
  {
    title: "Accueil",
    href: "/",
  },
  {
    title: "À propos",
    href: "/about",
    children: [
      {
        title: "Le fonctionnement de l'équipe",
        href: "/about/team",
      },
      {
        title: "Nos axes d'action",
        href: "/about/axes",
      },
      {
        title: "Nos antennes",
        href: "/about/antennas",
      },
      {
        title: "Nos rapports d'activité",
        href: "/about/reports",
      },
      {
        title: "Nous contacter",
        href: "/about/contact",
      },
    ],
  },
  {
    title: "Projets",
    href: "/projects",
    children: [
      {
        title: "A venir",
        href: "/projects/upcoming",
      },
      {
        title: "En cours",
        href: "/projects/ongoing",
      },
      {
        title: "Passés",
        href: "/projects/past",
      },
      {
        title: "Tous les projets",
        href: "/projects/all",
      },
      {
        title: "Hors saison",
        href: "/projects/offseason",
      },
    ],
  },
  {
    title: "Événements",
    href: "/events",
  },
  {
    title: "Ressources",
    href: "/resources",
    children: [
      {
        title: "Nos formations",
        href: "/resources/training",
      },
      {
        title: "Articles de presse",
        href: "/resources/press",
      },
      {
        title: "Serment d'Hippocrate",
        href: "/resources/hippocrate",
      },
      {
        title: "Les grands défis de l'IA",
        href: "/resources/ia-challenges",
      },
      {
        title: "Charte diversité",
        href: "/resources/diversity",
      },
    ],
  },
] as Array<{
  title: string;
  href: string;
  children?: Array<{ title: string; href: string; description: string }>;
}>;

export function MainMenu() {
  return (
    <NavigationMenu className="z-50">
      <NavigationMenuList>
        {menu.map((item) => (
          <NavigationMenuItem key={item.title}>
            {(item.children && (
              <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
            )) || (
              <Link href={item.href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {item.title}
                </NavigationMenuLink>
              </Link>
            )}
            {item.children && (
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-2 p-4 md:w-[300px] grid-cols-1 lg:w-[400px]">
                  {item.children.map((child) => (
                    <li key={child.title}>
                      <Link href={child.href} legacyBehavior passHref>
                        <a
                          className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          )}
                        >
                          <div className="text-sm font-medium leading-none">
                            {child.title}
                          </div>
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
