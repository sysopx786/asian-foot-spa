import { useRouterState, createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { NotFound } from "@/components/shell";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Asian Foot Spa" },
      { name: "theme-color", content: "#f4efe6" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: `${import.meta.env.BASE_URL}favicon.svg` },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,460;0,9..144,560;1,9..144,460&family=Noto+Sans+SC:wght@400;500&family=Noto+Serif+SC:wght@500;600&family=Outfit:wght@400;500&family=Roboto:wght@400;500&display=swap",
      },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  component: RootComponent,
  notFoundComponent: Missing,
});

function RootComponent() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const lang = documentLang(pathname);
  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}

function Missing() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return <NotFound lang={contentLang(pathname)} />;
}

function documentLang(pathname: string) {
  if (pathname === "/zh" || pathname.startsWith("/zh/")) return "zh-Hans";
  if (pathname === "/es" || pathname.startsWith("/es/")) return "es";
  return "en";
}

function contentLang(pathname: string) {
  if (pathname === "/zh" || pathname.startsWith("/zh/")) return "zh" as const;
  if (pathname === "/es" || pathname.startsWith("/es/")) return "es" as const;
  return "en" as const;
}
