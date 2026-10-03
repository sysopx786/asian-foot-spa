import { createFileRoute } from "@tanstack/react-router";
import { ReviewsPage } from "@/components/pages";
import { pageSeo } from "@/content/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/reviews")({
  head: () => pageHead(pageSeo("en", "reviews")),
  component: () => <ReviewsPage lang="en" />,
});
