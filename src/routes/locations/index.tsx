import { createFileRoute } from "@tanstack/react-router";
import { LocationsPage } from "@/components/pages";
import { pageSeo } from "@/content/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/locations/")({
  head: () => pageHead(pageSeo("en", "locations")),
  component: () => <LocationsPage lang="en" />,
});
