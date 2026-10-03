import { createFileRoute } from "@tanstack/react-router";
import { GalleryPage } from "@/components/pages";
import { pageSeo } from "@/content/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/es/gallery")({
  head: () => pageHead(pageSeo("es", "gallery")),
  component: () => <GalleryPage lang="es" />,
});
