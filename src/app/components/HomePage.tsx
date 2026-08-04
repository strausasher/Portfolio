import { useEffect } from "react";
import { useLocation } from "react-router";
import { Hero } from "./Hero";
import { About } from "./About";
import { Portfolio } from "./Portfolio";
import { Contact } from "./Contact";

export function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const el = document.querySelector(location.hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
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
