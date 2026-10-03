import { useEffect, useMemo, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { useRouterState } from "@tanstack/react-router";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowUp, Menu, Phone, Search, X } from "lucide-react";
import {
  locationPath,
  locations,
  otherLangPath,
  pathFor,
  searchIndex,
  servicePath,
  services,
  ui,
  type Lang,
} from "@/content/site";

export function TextLink({
  to,
  className,
  children,
  onClick,
}: {
  to: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}) {
  const hash = to.includes("#") ? to.slice(to.indexOf("#") + 1) : undefined;
  const path = hash ? to.slice(0, to.indexOf("#")) || "/" : to;
  return (
    <Link to={path as never} hash={hash} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

function StudioFilm({ lang }: { lang: Lang }) {
  return (
    <section className="wrap pt-6" aria-label={lang === "en" ? "Studio walkthrough" : "Recorrido del estudio"}>
      <figure>
        <div className="frame-video">
          <video
            src={`${import.meta.env.BASE_URL}media/studio-walkthrough.mp4`}
            poster={`${import.meta.env.BASE_URL}media/studio-walkthrough-poster.jpg`}
            width={1280}
            height={720}
            autoPlay
            muted
            loop
            playsInline
            controls
            preload="auto"
            aria-label={
              lang === "en"
                ? "Walk through Asian Foot Spa: the door, the waiting room, and a treatment room."
                : "Recorrido por Asian Foot Spa: la puerta, la sala de espera y una sala de tratamiento."
            }
          />
        </div>
        <figcaption className="mt-3 text-sm text-muted">
          {lang === "en" ? "A walk through the studio." : "Un recorrido por el estudio."}
        </figcaption>
      </figure>
    </section>
  );
}

export function Shell({ lang, children }: { lang: Lang; children: ReactNode }) {
  const path = useRouterState({ select: (state) => state.location.pathname });
  const home = path === "/" || path === "/es" || path === "/es/";
  return (
    <>
      <a className="skip" href="#content">
        {ui.skip[lang]}
      </a>
      <Header lang={lang} />
      {home ? <StudioFilm lang={lang} /> : null}
      <main id="content">{children}</main>
      <Footer lang={lang} />
      <CallDock lang={lang} />
      <BackToTop lang={lang} />
    </>
  );
}

function Header({ lang }: { lang: Lang }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const alt = otherLangPath(pathname);
  const [panel, setPanel] = useState<"services" | "studios" | "mobile" | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    setPanel(null);
    setSearchOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setPanel(null);
      const tag = (e.target as HTMLElement | null)?.tagName;
      if (e.key === "/" && tag !== "INPUT" && tag !== "TEXTAREA") {
        e.preventDefault();
        setSearchOpen(true);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="no-print sticky top-0 z-40 border-b border-line bg-paper">
      <div className="wrap hidden items-center justify-between gap-4 py-2 md:flex">
        <p className="text-xs tracking-widest text-muted uppercase">
          {lang === "en" ? "Phoenixville · Open 7 days, 10–9" : "Phoenixville · Abierto los 7 días, 10–9"}
        </p>
        <div className="flex gap-5">
          {locations.map((loc) => (
            <a key={loc.slug} className="text-link text-sm" href={`tel:${loc.phoneTel}`}>
              {loc.name[lang]} {loc.phoneDisplay}
            </a>
          ))}
        </div>
      </div>
      <div className="header-main wrap">
        <TextLink to={pathFor(lang, "home")} className="logo-home">
          <img
            className="logo-wordmark"
            src={`${import.meta.env.BASE_URL}logo-header.jpg`}
            alt="Asian Foot Spa"
            width={3190}
            height={272}
          />
        </TextLink>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          <PanelButton
            pressed={panel === "services"}
            onClick={() => setPanel(panel === "services" ? null : "services")}
          >
            {ui.navServices[lang]}
          </PanelButton>
          <PanelButton
            pressed={panel === "studios"}
            onClick={() => setPanel(panel === "studios" ? null : "studios")}
          >
            {ui.navStudios[lang]}
          </PanelButton>
          <TextLink to={pathFor(lang, "reviews")} className="btn">
            {ui.navReviews[lang]}
          </TextLink>
          <TextLink to={pathFor(lang, "faq")} className="btn">
            {ui.navFaq[lang]}
          </TextLink>
          <TextLink to={pathFor(lang, "visit")} className="btn btn-line">
            {ui.navVisit[lang]}
          </TextLink>
        </nav>
        <div className="header-tools">
          <LangSwitch href={alt.href} label={alt.lang === "es" ? "ES" : "EN"} />
          <button
            className="btn"
            type="button"
            aria-label={ui.search[lang]}
            onClick={() => setSearchOpen(true)}
          >
            <Search className="size-4" aria-hidden="true" />
          </button>
          <button
            className="btn btn-line lg:hidden"
            type="button"
            aria-expanded={panel === "mobile"}
            onClick={() => setPanel(panel === "mobile" ? null : "mobile")}
          >
            {panel === "mobile" ? <X className="size-4" aria-hidden="true" /> : <Menu className="size-4" aria-hidden="true" />}
            <span className="sr-only">{panel === "mobile" ? ui.close[lang] : ui.openMenu[lang]}</span>
          </button>
        </div>
      </div>
      {panel === "services" && (
        <div className="hidden border-t border-line lg:block">
          <div className="wrap grid gap-x-10 py-6 sm:grid-cols-2">
            {services.map((service) => (
              <TextLink
                key={service.slug}
                to={servicePath(lang, service.slug)}
                className="menu-row"
                onClick={() => setPanel(null)}
              >
                <span className="font-display text-2xl">{service.name[lang]}</span>
              </TextLink>
            ))}
          </div>
        </div>
      )}
      {panel === "studios" && (
        <div className="hidden border-t border-line lg:block">
          <div className="wrap grid gap-8 py-6 md:grid-cols-2">
            {locations.map((loc) => (
              <TextLink
                key={loc.slug}
                to={locationPath(lang, loc.slug)}
                className="block"
                onClick={() => setPanel(null)}
              >
                <span className="font-display text-3xl">{loc.name[lang]}</span>
                <span className="mt-2 block text-muted">
                  {loc.street}
                  <br />
                  {loc.hours[lang]}
                  <br />
                  {loc.phoneDisplay}
                </span>
              </TextLink>
            ))}
          </div>
        </div>
      )}
      {panel === "mobile" && (
        <nav className="max-h-[70vh] overflow-y-auto border-t border-line lg:hidden" aria-label="Mobile">
          <div className="wrap grid gap-2 py-4 pb-8">
            <TextLink className="btn justify-start" to={pathFor(lang, "visit")} onClick={() => setPanel(null)}>
              {ui.navVisit[lang]}
            </TextLink>
            <TextLink className="btn justify-start" to={pathFor(lang, "services")} onClick={() => setPanel(null)}>
              {ui.navServices[lang]}
            </TextLink>
            {services.map((service) => (
              <TextLink
                key={service.slug}
                className="py-2 pl-4 text-ink"
                to={servicePath(lang, service.slug)}
                onClick={() => setPanel(null)}
              >
                {service.name[lang]}
              </TextLink>
            ))}
            <TextLink className="btn justify-start" to={pathFor(lang, "locations")} onClick={() => setPanel(null)}>
              {ui.navStudios[lang]}
            </TextLink>
            {locations.map((loc) => (
              <TextLink
                key={loc.slug}
                className="py-2 pl-4"
                to={locationPath(lang, loc.slug)}
                onClick={() => setPanel(null)}
              >
                {loc.name[lang]} · {loc.phoneDisplay}
              </TextLink>
            ))}
            <TextLink className="btn justify-start" to={pathFor(lang, "reviews")} onClick={() => setPanel(null)}>
              {ui.navReviews[lang]}
            </TextLink>
            <TextLink className="btn justify-start" to={pathFor(lang, "faq")} onClick={() => setPanel(null)}>
              {ui.navFaq[lang]}
            </TextLink>
            <TextLink className="btn justify-start" to={pathFor(lang, "gallery")} onClick={() => setPanel(null)}>
              {ui.navGallery[lang]}
            </TextLink>
          </div>
        </nav>
      )}
      <SearchDialog lang={lang} open={searchOpen} onOpenChange={setSearchOpen} />
    </header>
  );
}

function PanelButton({
  children,
  pressed,
  onClick,
}: {
  children: ReactNode;
  pressed: boolean;
  onClick: () => void;
}) {
  return (
    <button type="button" className="btn" aria-expanded={pressed} onClick={onClick}>
      {children}
    </button>
  );
}

function LangSwitch({ href, label }: { href: string; label: string }) {
  return (
    <TextLink to={href} className="btn btn-line">
      {label}
    </TextLink>
  );
}

function SearchDialog({
  lang,
  open,
  onOpenChange,
}: {
  lang: Lang;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [q, setQ] = useState("");
  const entries = useMemo(() => searchIndex(lang), [lang]);
  const results = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return entries.slice(0, 6);
    return entries
      .filter((e) => `${e.title} ${e.blurb}`.toLowerCase().includes(needle))
      .slice(0, 8);
  }, [entries, q]);

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="veil fixed inset-0 z-50" />
        <Dialog.Content className="fixed top-20 left-1/2 z-50 w-[min(36rem,calc(100%-2rem))] -translate-x-1/2 border border-line bg-paper p-4">
          <Dialog.Title className="font-display text-2xl">{ui.search[lang]}</Dialog.Title>
          <Dialog.Description className="mt-1 text-sm text-muted">{ui.searchHint[lang]}</Dialog.Description>
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            aria-label={ui.searchLabel[lang]}
            className="mt-4 w-full border border-line bg-paper px-3 py-3 text-ink"
          />
          <ul className="mt-3 max-h-80 overflow-y-auto">
            {results.length === 0 && <li className="py-3 text-muted">{ui.searchEmpty[lang]}</li>}
            {results.map((result) => (
              <li key={result.href + result.title}>
                <TextLink
                  to={result.href}
                  className="block border-t border-line py-3"
                  onClick={() => onOpenChange(false)}
                >
                  <span className="block font-display text-xl">{result.title}</span>
                  <span className="block text-sm text-muted">{result.blurb}</span>
                </TextLink>
              </li>
            ))}
          </ul>
          <Dialog.Close className="btn mt-3">{ui.close[lang]}</Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function Footer({ lang }: { lang: Lang }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const alt = otherLangPath(pathname);
  return (
    <footer className="no-print border-t border-line bg-paper-2 pb-28 lg:pb-12">
      <div className="wrap grid gap-10 py-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="font-display text-3xl italic">Asian Foot Spa</p>
          <p className="mt-3 max-w-xs text-muted">{ui.notMedical[lang]}</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 md:col-span-8">
          {locations.map((loc) => (
            <div key={loc.slug}>
              <p className="eyebrow">{loc.name[lang]}</p>
              <p className="mt-3">
                {loc.street}
                <br />
                {loc.city}, {loc.region} {loc.postal}
              </p>
              <p className="mt-2">
                <a className="text-link" href={`tel:${loc.phoneTel}`}>
                  {loc.phoneDisplay}
                </a>
              </p>
              <p className="mt-1 text-sm text-muted">{loc.hours[lang]}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="wrap flex flex-wrap gap-x-5 gap-y-2 border-t border-line py-5 text-sm">
        <TextLink className="text-link" to={pathFor(lang, "services")}>
          {ui.navServices[lang]}
        </TextLink>
        <TextLink className="text-link" to={pathFor(lang, "locations")}>
          {ui.navStudios[lang]}
        </TextLink>
        <TextLink className="text-link" to={pathFor(lang, "gallery")}>
          {ui.navGallery[lang]}
        </TextLink>
        <TextLink className="text-link" to={pathFor(lang, "faq")}>
          {ui.navFaq[lang]}
        </TextLink>
        <TextLink className="text-link" to={pathFor(lang, "reviews")}>
          {ui.navReviews[lang]}
        </TextLink>
        <TextLink className="text-link" to={pathFor(lang, "visit")}>
          {ui.navVisit[lang]}
        </TextLink>
        <TextLink className="text-link" to={pathFor(lang, "privacy")}>
          {ui.privacy[lang]}
        </TextLink>
        <TextLink className="text-link" to={alt.href}>
          {alt.lang === "es" ? "Español" : "English"}
        </TextLink>
        {locations[0].links.map((link) => (
          <a key={link.href} className="text-link" href={link.href} rel="noreferrer">
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}

function CallDock({ lang }: { lang: Lang }) {
  return (
    <div className="no-print fixed inset-x-0 bottom-0 z-30 border-t border-line bg-paper lg:hidden">
      <div className={locations.length > 1 ? "grid grid-cols-2" : "grid grid-cols-1"}>
        {locations.map((loc) => (
          <a
            key={loc.slug}
            href={`tel:${loc.phoneTel}`}
            className="flex min-h-14 items-center justify-center gap-2 border-l border-line text-sm first:border-l-0"
          >
            <Phone className="size-4" aria-hidden="true" />
            <span>
              <span className="block text-xs tracking-widest uppercase">{loc.name[lang]}</span>
              {ui.call[lang]}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

function BackToTop({ lang }: { lang: Lang }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    function onScroll() {
      setShow(window.scrollY > 700);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      type="button"
      className="no-print btn btn-line fixed right-4 bottom-20 z-30 bg-paper lg:bottom-6"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ArrowUp className="size-4" aria-hidden="true" />
      {ui.backTop[lang]}
    </button>
  );
}

export function NotFound({ lang }: { lang: Lang }) {
  return (
    <Shell lang={lang}>
      <div className="wrap py-24">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 font-display text-5xl">
          {lang === "en" ? "That page is not on the menu." : "Esa página no está en el menú."}
        </h1>
        <TextLink to={pathFor(lang, "home")} className="btn btn-primary mt-8">
          {ui.home[lang]}
        </TextLink>
      </div>
    </Shell>
  );
}
