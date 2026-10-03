import { createFileRoute } from "@tanstack/react-router";
import { LocationsPage } from "@/components/pages";
import { pageSeo } from "@/content/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/es/locations/")({
  head: () => pageHead(pageSeo("es", "locations")),
  component: () => <LocationsPage lang="es" />,
});
