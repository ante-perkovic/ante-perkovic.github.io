import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const groups = [
  {
    title: "Frontend",
    tags: ["React", "TypeScript", "Vite", "Tailwind", "shadcn/ui", "MUI"],
  },
  {
    title: "Backend",
    tags: ["NestJS", "Node.js", "Go", "C# / ASP.NET", "Ruby on Rails"],
  },
  {
    title: "Data & Messaging",
    tags: ["PostgreSQL", "Redis", "RabbitMQ", "Kafka", "WebSockets"],
  },
  {
    title: "Infrastructure",
    tags: ["Docker", "Nginx", "Keycloak", "GitLab CI/CD", "PM2"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border py-16">
      <p className="mb-8 text-xs font-bold uppercase tracking-widest text-[var(--color-teal)]">
        Skills
      </p>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {groups.map((group) => (
          <Card key={group.title}>
            <CardHeader className="pb-2 pt-4">
              <CardTitle className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                {group.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-1.5 pb-4">
              {group.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
