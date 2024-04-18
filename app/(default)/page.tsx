export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};

import Testimonials from "@/components/landing/Testimonials";
import Managers from "@/components/landing/managers";
import Projects from "@/components/landing/projects";
import Submit from "@/components/landing/submit";
import Hero from "@/components/landing/hero";
import Top from "@/components/landing/top";

export default function Home() {
  return (
    <>
      <Hero />
      <Top />
      <Projects />
      <Managers />
      <Submit />
      <Testimonials />
    </>
  );
}
