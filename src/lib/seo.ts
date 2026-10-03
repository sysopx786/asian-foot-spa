import type { Lang, Seo } from "@/content/site";

const ogLocale: Record<Lang, string> = { en: "en_US", es: "es_ES", zh: "zh_CN" };

export function pageHead(seo: Seo) {
  return {
    meta: [
      { title: seo.title },
      { name: "description", content: seo.description },
      { name: "robots", content: "index, follow" },
      { property: "og:locale", content: ogLocale[seo.lang] },
    ],
    links: [
      { rel: "canonical", href: seo.path },
      { rel: "alternate", hrefLang: "en", href: seo.alternates.en },
      { rel: "alternate", hrefLang: "es", href: seo.alternates.es },
      { rel: "alternate", hrefLang: "zh-Hans", href: seo.alternates.zh },
      { rel: "alternate", hrefLang: "x-default", href: seo.alternates.en },
    ],
  };
}

export function jsonLdScript(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
