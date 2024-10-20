import { clsx, type ClassValue } from "clsx";
import { remark } from "remark";
import remarkHtml from "remark-html";
import remarkParse from "remark-parse";
import { twMerge } from "tailwind-merge";
import { visit } from "unist-util-visit";

export type TOCItem = {
  id: string;
  text: string;
  level: number;
};

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
  const processedContent = await remark().use(remarkHtml).process(rawContent);
  return processedContent.toString();
}

export async function extractTOCItems(markdown: string): Promise<TOCItem[]> {
  const tocItems: TOCItem[] = [];
  const processor = remark()
    .use(remarkParse)
    .use(() => (tree) => {
      visit(tree, "heading", (node) => {
        const text = node.children[0].value;
        const id = text.toLowerCase().replace(/\s+/g, "-");
        tocItems.push({ id, text, level: node.depth });
      });
    })
    .use(remarkHtml);

  await processor.process(markdown);
  return tocItems;
}
