import { Card, CardContent } from "@/components/ui/card";

export default function Education() {
  return (
    <section id="education" className="border-t border-border py-16">
      <p className="mb-8 text-xs font-bold uppercase tracking-widest text-[var(--color-teal)]">
        Education
      </p>
      <Card>
        <CardContent className="flex items-start justify-between gap-4 pt-5">
          <div>
            <p className="font-bold">Bachelor's degree, Computer Science</p>
            <p className="mt-1 text-sm text-[var(--color-teal)]">
              University of Zagreb — Faculty of Electrical Engineering and
              Computing (FER)
            </p>
          </div>
          <p className="shrink-0 text-sm text-muted-foreground">2019 – 2022</p>
        </CardContent>
      </Card>
    </section>
  );
}
