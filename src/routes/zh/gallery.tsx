import { createFileRoute } from "@tanstack/react-router";
import { GalleryPage } from "@/components/pages";
import { pageSeo } from "@/content/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/zh/gallery")({
  head: () => pageHead(pageSeo("zh", "gallery")),
  component: () => <GalleryPage lang="zh" />,
});
