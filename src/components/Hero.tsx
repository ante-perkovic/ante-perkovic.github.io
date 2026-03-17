import { Github, Linkedin } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="flex flex-col gap-5 py-20">
      <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-teal)]">
        Software Engineer · Zagreb, Croatia
      </p>

      <h1 className="text-5xl font-extrabold leading-tight tracking-tight md:text-6xl">
        Ante
        <br />
        <span className="text-[var(--color-teal)]">Perković</span>
      </h1>

      <p className="text-lg text-muted-foreground">
        Software Engineer | Tech Lead @&nbsp;KONČAR – Electrical Engineering
        Institute
      </p>

      <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
        Full-stack engineer with experience across web platforms, backend
        microservices, and real-time systems. I've worked across a wide stack —
        from React frontends and NestJS/Go backends to distributed systems with
        Kafka and RabbitMQ — delivering production software in industries
        ranging from satellites and healthcare to industrial automation.
      </p>

      <div className="flex flex-wrap gap-3 pt-1">
        <a
          href="https://github.com/ante-perkovic"
          target="_blank"
          rel="noopener"
          className={cn(buttonVariants({ variant: "default", size: "default" }), "gap-2")}
        >
          <Github className="h-4 w-4" />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/ante-perkovi%C4%87-270661165/"
          target="_blank"
          rel="noopener"
          className={cn(buttonVariants({ variant: "outline", size: "default" }), "gap-2")}
        >
          <Linkedin className="h-4 w-4" />
          LinkedIn
        </a>
      </div>
    </section>
  );
}
