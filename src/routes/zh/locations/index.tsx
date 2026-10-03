import { createFileRoute } from "@tanstack/react-router";
import { LocationsPage } from "@/components/pages";
import { pageSeo } from "@/content/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/zh/locations/")({
  head: () => pageHead(pageSeo("zh", "locations")),
  component: () => <LocationsPage lang="zh" />,
});
