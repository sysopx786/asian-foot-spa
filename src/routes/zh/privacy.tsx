import { createFileRoute } from "@tanstack/react-router";
import { PrivacyPage } from "@/components/pages";
import { pageSeo } from "@/content/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/zh/privacy")({
  head: () => pageHead(pageSeo("zh", "privacy")),
  component: () => <PrivacyPage lang="zh" />,
});
