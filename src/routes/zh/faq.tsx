import { createFileRoute } from "@tanstack/react-router";
import { FaqPage } from "@/components/pages";
import { pageSeo } from "@/content/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/zh/faq")({
  head: () => pageHead(pageSeo("zh", "faq")),
  component: () => <FaqPage lang="zh" />,
});
