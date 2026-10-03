import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/pages";
import { pageSeo } from "@/content/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/zh/")({
  head: () => pageHead(pageSeo("zh", "home")),
  component: () => <HomePage lang="zh" />,
});
