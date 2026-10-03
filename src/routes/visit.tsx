import { createFileRoute } from "@tanstack/react-router";
import { VisitPage } from "@/components/pages";
import { pageSeo } from "@/content/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/visit")({
  head: () => pageHead(pageSeo("en", "visit")),
  component: () => <VisitPage lang="en" />,
});
