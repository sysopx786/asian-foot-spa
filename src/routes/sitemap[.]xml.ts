import { createFileRoute } from "@tanstack/react-router";
import { locations, services } from "@/content/site";

const pages = ["", "/services", "/locations", "/reviews", "/faq", "/gallery", "/visit", "/privacy"];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url);
        const onPages = url.pathname.startsWith("/asian-foot-spa");
        const origin = onPages ? "https://sysopx786.github.io/asian-foot-spa" : url.origin;
        const paths = [
          ...pages,
          ...services.map((service) => `/services/${service.slug}`),
          ...locations.map((loc) => `/locations/${loc.slug}`),
        ];
        const urls = paths.flatMap((path) => {
          const en = path || "/";
          const es = path === "" ? "/es" : `/es${path}`;
          const zh = path === "" ? "/zh" : `/zh${path}`;
          return [en, es, zh];
        });
        const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${origin}${url === "/" ? "/" : url}</loc></url>`).join("\n")}
</urlset>`;
        return new Response(body, {
          headers: { "Content-Type": "application/xml; charset=utf-8" },
        });
      },
    },
  },
});
