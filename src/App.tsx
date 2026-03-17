import { useState, useEffect } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
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
      {/* Nav + Hero together fill exactly one viewport height */}
      <div className="flex h-svh flex-col">
        <Nav theme={theme} onToggleTheme={toggleTheme} />
        <Hero />
      </div>

      {/* Content below the fold */}
      <div className="mx-auto max-w-4xl px-6">
        <Skills />
        <Experience />
      </div>

      <Footer />
    </>
  );
}
