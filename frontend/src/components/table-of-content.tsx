"use client";

import { TOCItem } from "@/lib/utils";
import { ChevronUp, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export default function TableOfContents({ items }: { items: TOCItem[] }) {
  console.log(items);
  const [isOpen, setIsOpen] = useState(false);

  const toggleTOC = () => setIsOpen(!isOpen);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    console.log("clicking");
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      console.log("scrolling");
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="toc lg:sticky lg:top-4 lg:self-start">
      <Button
        variant="outline"
        className="flex items-center justify-between w-full lg:hidden mb-4"
        onClick={toggleTOC}
      >
        Table of Contents
        {isOpen ? (
          <ChevronUp className="h-4 w-4" />
        ) : (
          <ChevronDown className="h-4 w-4" />
        )}
      </Button>
      <ul className={`space-y-2 ${isOpen ? "block" : "hidden lg:block"}`}>
        {items.map((item) => (
          <li
            key={item.id}
            style={{ marginLeft: `${(item.level - 2) * 1}rem` }}
          >
            <a
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
