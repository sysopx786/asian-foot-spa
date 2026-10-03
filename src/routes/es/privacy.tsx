import { createFileRoute } from "@tanstack/react-router";
import { PrivacyPage } from "@/components/pages";
import { pageSeo } from "@/content/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/es/privacy")({
  head: () => pageHead(pageSeo("es", "privacy")),
  component: () => <PrivacyPage lang="es" />,
});
