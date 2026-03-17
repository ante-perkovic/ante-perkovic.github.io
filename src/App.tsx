import { useState, useEffect } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

type Theme = "dark" | "light";

export default function App() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <>
      <Nav theme={theme} onToggleTheme={toggleTheme} />
      <main className="mx-auto max-w-3xl px-6">
        <Hero />
        <Skills />
        <Experience />
        <Education />
      </main>
      <Footer />
    </>
  );
}
