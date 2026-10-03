import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage } from "@/components/pages";
import { pageSeo } from "@/content/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/services/")({
  head: () => pageHead(pageSeo("en", "services")),
  component: () => <ServicesPage lang="en" />,
});
