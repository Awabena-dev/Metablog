import Hero from "@/Sections/Hero/Hero";
import LastestPost from "@/Sections/LastestPost/LastestPost";
import Advertisement from "@/components/Advertisement";
import { client } from "@/lib/sainty";

async function getLastestBlog() {
  const query = `*[_type == 'blog'] | order(_createdAt desc){
    title,
    "currentslug": slug.current,
    authorImage,
    authorName,
    category,
    date,
    coverImage,
  }`;

  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const data = await getLastestBlog();

  return (
    <>
      <Hero />
      <Advertisement />
      <LastestPost blog={data} />
      <Advertisement />
    </>
  );
}
