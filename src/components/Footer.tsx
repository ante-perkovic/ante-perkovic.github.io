export default function Footer() {
  return (
    <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
      Built by Ante Perković ·{" "}
      <a
        href="https://github.com/ante-perkovic"
        target="_blank"
        rel="noopener"
        className="text-[var(--color-teal)] hover:underline"
      >
        github.com/ante-perkovic
      </a>
    </footer>
  );
}
