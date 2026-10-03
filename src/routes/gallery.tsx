import { createFileRoute } from "@tanstack/react-router";
import { GalleryPage } from "@/components/pages";
import { pageSeo } from "@/content/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/gallery")({
  head: () => pageHead(pageSeo("en", "gallery")),
  component: () => <GalleryPage lang="en" />,
});
