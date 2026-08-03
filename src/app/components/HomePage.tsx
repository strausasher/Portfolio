import { Hero } from "./Hero";
import { About } from "./About";
import { Portfolio } from "./Portfolio";
import { Contact } from "./Contact";

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </>
  );
}
