import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

type Theme = "dark" | "light";

export default function App() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [heroOpacity, setHeroOpacity] = useState(1);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      // Fade hero out over the first 70% of viewport height scrolled
      const progress = window.scrollY / (window.innerHeight * 0.7);
      setHeroOpacity(Math.max(0, 1 - progress));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <>
      {/* Nav — always on top */}
      <Nav theme={theme} onToggleTheme={toggleTheme} />

      {/* Hero — sticky, centered, fades on scroll (works on iOS too) */}
      <div
        className="sticky top-0 z-0 flex h-svh items-center justify-center"
        style={{
          opacity: heroOpacity,
          pointerEvents: heroOpacity < 0.05 ? "none" : "auto",
        }}
      >
        <Hero />
      </div>

      {/* Scroll indicator — fades with hero */}
      <div
        className="fixed bottom-8 left-1/2 z-[5] -translate-x-1/2"
        style={{ opacity: heroOpacity * 0.5 }}
      >
        <ChevronDown className="h-5 w-5 animate-bounce text-muted-foreground" />
      </div>

      {/* Sections scroll over the sticky hero */}
      <div className="relative z-10 bg-background">
        <div className="mx-auto max-w-3xl px-6">
          <Skills />
          <Experience />
        </div>
        <Footer />
      </div>
    </>
  );
}
