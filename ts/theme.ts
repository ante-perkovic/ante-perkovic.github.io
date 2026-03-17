type Theme = "dark" | "light";

function toggleTheme(): void {
  const root = document.documentElement;
  const current = root.getAttribute("data-theme") as Theme;
  const next: Theme = current === "dark" ? "light" : "dark";

  root.setAttribute("data-theme", next);
  (document.getElementById("theme-icon") as HTMLElement).textContent =
    next === "dark" ? "🌙" : "☀️";
  (document.getElementById("theme-label") as HTMLElement).textContent =
    next === "dark" ? "Dark" : "Light";
}

(window as Window & { toggleTheme: () => void }).toggleTheme = toggleTheme;
