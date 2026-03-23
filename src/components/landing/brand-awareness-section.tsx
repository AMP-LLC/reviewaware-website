import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const awarenessCards = [
  {
    title: "Customer Awareness",
    body: "Understand what customers think about your service.",
  },
  {
    title: "Service Awareness",
    body: "Identify technician or process issues early.",
  },
  {
    title: "Brand Awareness",
    body: "More positive reviews increase visibility and trust.",
  },
] as const;

export function BrandAwarenessSection() {
  return (
    <section className="border-b border-zinc-200/60 bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-[1.875rem] font-semibold leading-tight tracking-tight text-zinc-950 sm:text-4xl lg:text-[2.625rem]">
            Be Aware of What Your Customers Experience
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-pretty text-base leading-relaxed text-zinc-700 sm:text-lg">
            ReviewAware helps service businesses understand how customers experience their work.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-pretty text-base leading-relaxed text-zinc-700 sm:text-lg">
            Automatically request reviews after every completed job and discover what customers
            appreciate — and where service can improve.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-pretty text-base leading-relaxed text-zinc-700 sm:text-lg">
            Better awareness leads to stronger reputation and more positive reviews.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3 md:gap-10">
          {awarenessCards.map((card) => (
            <Card key={card.title} className="rounded-xl border border-gray-200 bg-white shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl tracking-tight text-zinc-950">{card.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-zinc-700 sm:text-base">{card.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
