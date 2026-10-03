import { createFileRoute } from "@tanstack/react-router";
import { FaqPage } from "@/components/pages";
import { pageSeo } from "@/content/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/es/faq")({
  head: () => pageHead(pageSeo("es", "faq")),
  component: () => <FaqPage lang="es" />,
});
