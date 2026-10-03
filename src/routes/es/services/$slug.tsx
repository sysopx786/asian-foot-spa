import { createFileRoute, notFound } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/pages";
import { getService, serviceSeo } from "@/content/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/es/services/$slug")({
  loader: ({ params }) => {
    if (!getService(params.slug)) throw notFound();
    return { slug: params.slug };
  },
  head: ({ loaderData }) => {
    const seo = serviceSeo("es", loaderData?.slug ?? "");
    return seo ? pageHead(seo) : { meta: [{ title: "Asian Foot Spa" }] };
  },
  component: function Page() {
    const { slug } = Route.useLoaderData();
    return <ServiceDetail lang="es" slug={slug} />;
  },
});
