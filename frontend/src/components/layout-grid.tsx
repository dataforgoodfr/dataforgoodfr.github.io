"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Card = {
  name: string;
  description: string;
  className: string;
  thumbnail: string;
  href: string;
};

const Card = ({ card }: { card: Card }) => {
  return (
    <div className="relative bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
      <img
        className="w-full h-auto rounded-xl"
        src={card.thumbnail}
        alt="Card Image"
      />
      <div className="absolute top-0 start-0 end-0">
        <div className="p-4 md:p-5">
          <h3 className="text-3xl font-semibold text-gray-800">{card.name}</h3>
          <p className="mt-1 text-gray-300">{card.description}</p>
          {/* <p className="mt-5 text-xs text-gray-500 dark:text-neutral-500">
            Last updated 5 mins ago
          </p> */}
        </div>
      </div>
    </div>
  );
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const handleClick = (href: string) => {
    window.location.href = href;
  };

  return (
    <div className="w-full h-96 p-10 grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4">
      {cards.map((card, i) => (
        <Card key={i} card={card} />
      ))}
    </div>
  );
};
