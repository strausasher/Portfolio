import { useEffect } from "react";
import { useLocation } from "react-router";
import { Hero } from "./Hero";
import { About } from "./About";
import { Portfolio } from "./Portfolio";
import { Contact } from "./Contact";
import { scrollToHash } from "./scrollToHash";

export function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    scrollToHash(location.hash);
  }, [location.hash]);

  return (
    <>
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </>
  );
}
