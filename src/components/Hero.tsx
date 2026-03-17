import { Github, Linkedin } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <div className="flex w-full max-w-lg flex-col gap-5 px-8">
      <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-teal)]">
        Software Engineer · Zagreb, Croatia
      </p>

      <h1 className="text-5xl font-extrabold tracking-tight lg:text-6xl">
        <span className="block leading-none">Ante</span>
        <span className="block leading-none text-[var(--color-teal)]">Perković</span>
      </h1>

      <p className="text-base text-muted-foreground">
        Software Engineer | Tech Lead @&nbsp;KONČAR – Electrical Engineering Institute
      </p>

      <p className="text-sm leading-relaxed text-muted-foreground">
        Full-stack engineer with experience across web platforms, backend
        microservices, and real-time systems. I've worked across a wide stack —
        from React frontends and NestJS/Go backends to distributed systems with
        Kafka and RabbitMQ — delivering production software in industries ranging
        from satellites and healthcare to industrial automation.
      </p>

      {/* Education inline */}
      <div className="rounded-lg border border-border bg-card px-4 py-3">
        <p className="text-sm font-semibold">Bachelor's degree, Computer Science</p>
        <p className="mt-0.5 text-xs text-[var(--color-teal)]">
          University of Zagreb — Faculty of Electrical Engineering and Computing (FER)
        </p>
        <p className="mt-0.5 text-xs text-muted-foreground">2019 – 2022</p>
      </div>

      <div className="flex flex-wrap gap-3">
        <a
          href="https://github.com/ante-perkovic"
          target="_blank"
          rel="noopener"
          className={cn(buttonVariants({ variant: "default", size: "sm" }), "gap-2")}
        >
          <Github className="h-4 w-4" />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/ante-perkovi%C4%87-270661165/"
          target="_blank"
          rel="noopener"
          className={cn(buttonVariants({ variant: "outline", size: "sm" }), "gap-2")}
        >
          <Linkedin className="h-4 w-4" />
          LinkedIn
        </a>
      </div>
    </div>
  );
}
