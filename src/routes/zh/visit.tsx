import { createFileRoute } from "@tanstack/react-router";
import { VisitPage } from "@/components/pages";
import { pageSeo } from "@/content/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/zh/visit")({
  head: () => pageHead(pageSeo("zh", "visit")),
  component: () => <VisitPage lang="zh" />,
});
