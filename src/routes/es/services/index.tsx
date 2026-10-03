import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage } from "@/components/pages";
import { pageSeo } from "@/content/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/es/services/")({
  head: () => pageHead(pageSeo("es", "services")),
  component: () => <ServicesPage lang="es" />,
});
