import { clsx, type ClassValue } from "clsx";
import { remark } from "remark";
import html from "remark-html";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getStrapiData<T extends { attributes: any }>(
  url: string
) {
  const res = await fetch(`${process.env.STRAPI_URL}/api/${url}`, {
    next: { revalidate: 0 },
  });
  const jsonRes = await res.json();
  return jsonRes?.data?.attributes as T["attributes"];
}

export function getImage(image: any) {
  return `${process.env.STRAPI_URL}${image.data.attributes.url}`;
}

export async function getMarkdownContent(rawContent: string) {
  const processedContent = await remark().use(html).process(rawContent);
  return processedContent.toString();
}
