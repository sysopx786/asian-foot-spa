import { createFileRoute, notFound } from "@tanstack/react-router";
import { LocationDetail } from "@/components/pages";
import { getLocation, locationSeo } from "@/content/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/locations/$slug")({
  loader: ({ params }) => {
    if (!getLocation(params.slug)) throw notFound();
    return { slug: params.slug };
  },
  head: ({ loaderData }) => {
    const seo = locationSeo("en", loaderData?.slug ?? "");
    return seo ? pageHead(seo) : { meta: [{ title: "Asian Foot Spa" }] };
  },
  component: function Page() {
    const { slug } = Route.useLoaderData();
    return <LocationDetail lang="en" slug={slug} />;
  },
});
