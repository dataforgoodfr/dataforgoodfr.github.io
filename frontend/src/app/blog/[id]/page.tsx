import TableOfContents from "@/components/table-of-content";
import {
  extractTOCItems,
  getImage,
  getMarkdownContent,
  getStrapiData,
} from "@/lib/utils";
import { ApiBlogBlog } from "@/types/strapi/generated/contentTypes";
import Image from "next/image";
import qs from "qs";

export default async function CommunityBlogArticle({
  params,
}: {
  params: { id: string };
}) {
  // const [tocItems, setTocItems] = useState<TOCItem[]>([]);

  const query = qs.stringify(
    {
      populate: {
        tags: true,
        thumbnail: true,
      },
      filters: {
        id: {
          $eq: Number(params.id),
        },
      },
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );
  const apiData = await getStrapiData<ApiBlogBlog[]>(`blogs?${query}`);
  const blog = apiData[0]?.attributes;

  const formattedContent = await getMarkdownContent(blog.content);
  const tocItems = await extractTOCItems(blog.content);

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <article className="lg:flex lg:gap-8">
        <div className="lg:w-3/4">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
            <p className="text-xl text-muted-foreground">{blog.description}</p>
          </header>

          <Image
            src={getImage(blog.thumbnail)}
            alt={blog.thumbnail.alt}
            width={800}
            height={400}
            className="rounded-lg mb-8 w-full"
          />

          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{
              __html: formattedContent,
            }}
          ></div>
        </div>
        <div className="lg:w-1/4 mt-8 lg:mt-0">
          <TableOfContents items={tocItems} />
        </div>
      </article>
    </div>
  );
}
