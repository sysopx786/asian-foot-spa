import { createFileRoute } from "@tanstack/react-router";
import { VisitPage } from "@/components/pages";
import { pageSeo } from "@/content/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/es/visit")({
  head: () => pageHead(pageSeo("es", "visit")),
  component: () => <VisitPage lang="es" />,
});
