import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/pages";
import { pageSeo } from "@/content/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => pageHead(pageSeo("en", "home")),
  component: () => <HomePage lang="en" />,
});
