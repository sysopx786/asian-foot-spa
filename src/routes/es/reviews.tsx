import { createFileRoute } from "@tanstack/react-router";
import { ReviewsPage } from "@/components/pages";
import { pageSeo } from "@/content/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/es/reviews")({
  head: () => pageHead(pageSeo("es", "reviews")),
  component: () => <ReviewsPage lang="es" />,
});
