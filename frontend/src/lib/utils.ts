import { clsx, type ClassValue } from "clsx";
import { remark } from "remark";
import html from "remark-html";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getStrapiData<T>(url: string) {
  const res = await fetch(`${process.env.STRAPI_URL}/api/${url}`, {
    next: { revalidate: 0 },
  });
  const jsonRes = await res.json();
  return jsonRes?.data as T;
}

export function getImage(image: any) {
  const imageRoute = image?.data?.attributes?.url;
  return imageRoute ? `${process.env.STRAPI_URL}${imageRoute}` : null;
}

export async function getMarkdownContent(rawContent: string) {
  const processedContent = await remark().use(html).process(rawContent);
  return processedContent.toString();
}
