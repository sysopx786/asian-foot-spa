import { createFileRoute } from "@tanstack/react-router";
import { ReviewsPage } from "@/components/pages";
import { pageSeo } from "@/content/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/zh/reviews")({
  head: () => pageHead(pageSeo("zh", "reviews")),
  component: () => <ReviewsPage lang="zh" />,
});
