import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavProps {
  theme: "dark" | "light";
  onToggleTheme: () => void;
}

export default function Nav({ theme, onToggleTheme }: NavProps) {
  return (
    <nav className="sticky top-0 z-10 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-3">
        <span className="text-sm font-bold tracking-wide">AP</span>
        <div className="flex items-center gap-5">
          <a
            href="#skills"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Skills
          </a>
          <a
            href="#experience"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Experience
          </a>
          <a
            href="#education"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Education
          </a>
          <Button
            variant="outline"
            size="sm"
            onClick={onToggleTheme}
            className="h-8 gap-1.5 px-3 text-xs"
          >
            {theme === "dark" ? (
              <>
                <Sun className="h-3.5 w-3.5" /> Light
              </>
            ) : (
              <>
                <Moon className="h-3.5 w-3.5" /> Dark
              </>
            )}
          </Button>
        </div>
      </div>
    </nav>
  );
}
