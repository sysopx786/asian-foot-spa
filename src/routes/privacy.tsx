import { createFileRoute } from "@tanstack/react-router";
import { PrivacyPage } from "@/components/pages";
import { pageSeo } from "@/content/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () => pageHead(pageSeo("en", "privacy")),
  component: () => <PrivacyPage lang="en" />,
});
