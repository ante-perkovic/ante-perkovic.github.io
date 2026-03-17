import { Separator } from "@/components/ui/separator";

interface Project {
  name: string;
  bullets: string[];
}

interface Job {
  company: string;
  companyShort: string;
  title: string;
  period: string;
  location: string;
  projects?: Project[];
  bullets?: string[];
}

const jobs: Job[] = [
  {
    company: "KONČAR – Electrical Engineering Institute",
    companyShort: "KONČAR – EEI",
    title: "Software Engineer | Tech Lead",
    period: "Jan 2026 – Present",
    location: "Zagreb · Hybrid",
    projects: [
      {
        name: "Laboratory Sample Logistics (LFK)",
        bullets: [
          "Full-stack web app to digitalize shipment and sample tracking in a chemical laboratory, replacing a manual Excel workflow",
          "Features structured sample grouping and automated PDF report generation",
          "Stack: React / TypeScript (Tailwind, shadcn/ui), NestJS backend",
        ],
      },
      {
        name: "Fleet Monitoring System (IMS)",
        bullets: [
          "Tech lead, lead developer, and solution architect for a distributed substation monitoring platform",
          "Centralized interface aggregating real-time sensor data from multiple locations via RabbitMQ and WebSocket",
          "Live signal monitoring with status indicators, historical data graphs, and customizable dashboard widgets",
          "Designed full UI/UX including mockups and feature concepts; managed full delivery cycle",
          "Stack: React / TypeScript (Tailwind, shadcn/ui), NestJS, Keycloak, PostgreSQL, Redis, RabbitMQ on Docker",
        ],
      },
    ],
  },
  {
    company: "KONČAR – Electrical Engineering Institute",
    companyShort: "KONČAR – EEI",
    title: "Software Engineer",
    period: "Nov 2024 – Jan 2026",
    location: "Zagreb · Hybrid",
    projects: [
      {
        name: "Transformer Test Station Digitalization",
        bullets: [
          "Full-stack features across a React / TypeScript (MUI) frontend and C# ASP.NET backend",
          "Optimized real-time calculations and dynamic form rendering for complex test workflows",
          "Mentored new developers, conducted code reviews, and enforced clean code standards",
          "Primary client contact — weekly requirement meetings, feature documentation, and stakeholder demos",
          "Set up CI pipeline and managed deployments via IIS",
        ],
      },
    ],
  },
  {
    company: "SES Satellites",
    companyShort: "SES Satellites",
    title: "Backend Engineer",
    period: "May 2023 – Nov 2024",
    location: "Zagreb · Remote",
    bullets: [
      "Developed features for Go-based microservices supporting satellite internet and global ship-tracking systems",
      "Built and maintained microservices running in Docker, handling real-time data exchange via Kafka",
      "Implemented unit tests with Testify and behavior-driven tests with Godog",
      "Deployed application versions and ensured smooth operation across the service ecosystem",
    ],
  },
  {
    company: "Teladoc Health",
    companyShort: "Teladoc Health",
    title: "Software Developer",
    period: "Mar 2022 – Jun 2023",
    location: "Remote",
    bullets: [
      "Worked with Ruby on Rails, JavaScript, and TypeScript",
      "Developed and tested integrations, extended product features, and shipped new functionality",
    ],
  },
  {
    company: "Zagrebačka banka",
    companyShort: "Zagrebačka banka",
    title: "Oracle Database Developer · Part-time",
    period: "Jun 2021 – Mar 2022",
    location: "Zagreb · Remote",
    bullets: [
      "Preparation of reports and statistics; module and interface design; ad hoc report testing",
      "Tools: Oracle Data Integrator (ODI), Oracle SQL Developer",
    ],
  },
  {
    company: "Double Lens Solutions",
    companyShort: "Double Lens Solutions",
    title: "3D Visualizer · Seasonal",
    period: "Aug 2020 – Aug 2021",
    location: "Zagreb",
    bullets: [
      "Created apartment geometry in Unreal Engine 4 for high-end, photorealistic architectural visualizations",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="border-t border-border py-16">
      <p className="mb-8 text-xs font-bold uppercase tracking-widest text-[var(--color-teal)]">
        Experience
      </p>
      <div className="flex flex-col gap-0">
        {jobs.map((job, i) => (
          <div key={i}>
            <div className="grid grid-cols-[160px_1fr] gap-6 py-8 md:grid-cols-[180px_1fr]">
              {/* Left: date + company */}
              <div className="text-right">
                <p className="text-sm font-semibold text-foreground">
                  {job.companyShort}
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {job.period}
                </p>
                <p className="text-xs text-muted-foreground">{job.location}</p>
              </div>

              {/* Right: content */}
              <div className="relative pl-6">
                {/* Timeline dot */}
                <span className="absolute left-0 top-[6px] h-2.5 w-2.5 rounded-full bg-[var(--color-teal)] ring-2 ring-background ring-offset-1 ring-offset-[var(--color-teal)]" />

                <p className="font-bold">{job.title}</p>
                <p className="mb-3 text-sm text-[var(--color-teal)]">
                  {job.company}
                </p>

                {job.projects ? (
                  <div className="flex flex-col gap-4">
                    {job.projects.map((project) => (
                      <div key={project.name}>
                        <p className="mb-1 text-sm font-semibold">
                          {project.name}
                        </p>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          {project.bullets.map((b, bi) => (
                            <li key={bi} className="ml-4 list-disc">
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {job.bullets?.map((b, bi) => (
                      <li key={bi} className="ml-4 list-disc">
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            {i < jobs.length - 1 && <Separator />}
          </div>
        ))}
      </div>
    </section>
  );
}
