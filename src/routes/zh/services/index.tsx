import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage } from "@/components/pages";
import { pageSeo } from "@/content/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/zh/services/")({
  head: () => pageHead(pageSeo("zh", "services")),
  component: () => <ServicesPage lang="zh" />,
});
