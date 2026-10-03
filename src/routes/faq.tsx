import { createFileRoute } from "@tanstack/react-router";
import { FaqPage } from "@/components/pages";
import { pageSeo } from "@/content/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/faq")({
  head: () => pageHead(pageSeo("en", "faq")),
  component: () => <FaqPage lang="en" />,
});
