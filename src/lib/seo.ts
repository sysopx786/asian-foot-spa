import type { Seo } from "@/content/site";

export function pageHead(seo: Seo) {
  return {
    meta: [
      { title: seo.title },
      { name: "description", content: seo.description },
      { name: "robots", content: "index, follow" },
    ],
    links: [
      { rel: "canonical", href: seo.lang === "es" ? seo.altPath : seo.path },
      { rel: "alternate", hrefLang: "en", href: seo.path },
      { rel: "alternate", hrefLang: "es", href: seo.altPath },
      { rel: "alternate", hrefLang: "x-default", href: seo.path },
    ],
  };
}

export function jsonLdScript(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
