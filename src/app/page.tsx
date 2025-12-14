import Hero from "@/Sections/Hero/Hero";
import LastestPost from "@/Sections/LastestPost/LastestPost";
import Advertisement from "@/components/Advertisement";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Advertisement />
      <LastestPost />
      <Advertisement />
    </>
  );
}
