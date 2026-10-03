import { useEffect, useMemo, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { useRouterState } from "@tanstack/react-router";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowUp, Menu, Search, X } from "lucide-react";
import { AddressLink, HoursLine, PhoneLink } from "@/components/contact";
import { ClockMark, GoogleMark, PhoneDisc } from "@/components/marks";
import {
  locationPath,
  locations,
  langPaths,
  langLabel,
  pageCopy,
  pathFor,
  searchIndex,
  servicePath,
  services,
  ui,
  type Lang,
} from "@/content/site";
import { studioStatus } from "@/lib/hours";

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
    <section className="wrap pt-6" aria-label={lang === "zh" ? "工作室走一遍" : lang === "es" ? "Recorrido del estudio" : "Studio walkthrough"}>
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
              lang === "zh"
                ? "走过 Asian Foot Spa：门口、等候室和一间理疗室。"
                : lang === "es"
                ? "Recorrido por Asian Foot Spa: la puerta, la sala de espera y una sala de tratamiento."
                : "Walk through Asian Foot Spa: the door, the waiting room, and a treatment room."
            }
          />
        </div>
        <figcaption className="mt-3 text-sm text-muted">
          {lang === "zh" ? "工作室里走一遍。" : lang === "es" ? "Un recorrido por el estudio." : "A walk through the studio."}
        </figcaption>
      </figure>
    </section>
  );
}

function isHome(path: string) {
  return path === "/" || path === "/es" || path === "/es/" || path === "/zh" || path === "/zh/";
}

export function Shell({ lang, children }: { lang: Lang; children: ReactNode }) {
  const path = useRouterState({ select: (state) => state.location.pathname });
  const home = isHome(path);
  return (
    <>
      <a className="skip" href="#content">
        {ui.skip[lang]}
      </a>
      <Header lang={lang} home={home} />
      {home ? <StudioFilm lang={lang} /> : null}
      <main id="content">{children}</main>
      <Footer lang={lang} />
      <CallDock lang={lang} />
      <BackToTop lang={lang} />
    </>
  );
}

function Header({ lang, home }: { lang: Lang; home: boolean }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const paths = langPaths(pathname);
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
    <header className="site-header no-print">
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
          <LangSwitch lang={lang} paths={paths} className="lang-switch lang-desktop" />
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
        <div className="header-panel hidden border-t lg:block">
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
        <div className="header-panel hidden border-t lg:block">
          <div className="wrap grid gap-8 py-6 md:grid-cols-2">
            {locations.map((loc) => (
              <div key={loc.slug} className="block">
                <TextLink to={locationPath(lang, loc.slug)} className="block" onClick={() => setPanel(null)}>
                  <span className="font-display text-3xl">{loc.name[lang]}</span>
                </TextLink>
                <AddressLink className="mt-2">
                  {loc.street}
                  <br />
                  {loc.city}, {loc.region} {loc.postal}
                </AddressLink>
                <HoursLine className="mt-1 text-sm text-muted">{loc.hours[lang]}</HoursLine>
                <PhoneLink tel={loc.phoneTel} className="mt-1">
                  {loc.phoneDisplay}
                </PhoneLink>
              </div>
            ))}
          </div>
        </div>
      )}
      {panel === "mobile" && (
        <nav className="header-panel max-h-[70vh] overflow-y-auto border-t lg:hidden" aria-label="Mobile">
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
              <span key={loc.slug} className="grid gap-1 py-2 pl-4">
                <TextLink to={locationPath(lang, loc.slug)} onClick={() => setPanel(null)}>
                  {loc.name[lang]}
                </TextLink>
                <PhoneLink tel={loc.phoneTel}>{loc.phoneDisplay}</PhoneLink>
              </span>
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
      <div className="header-sub wrap">
        <LangSwitch lang={lang} paths={paths} className="lang-switch lang-mobile" />
        {home ? <HeaderStatus lang={lang} /> : null}
      </div>
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


function HeaderStatus({ lang }: { lang: Lang }) {
  const loc = locations[0];
  const [status, setStatus] = useState<ReturnType<typeof studioStatus> | null>(null);
  useEffect(() => {
    setStatus(studioStatus(loc.open, loc.close, lang));
  }, [lang, loc.open, loc.close]);
  const isOpen = status?.isOpen ?? false;
  return (
    <div className="header-status">
      <TextLink to={locationPath(lang, loc.slug)} className="status-pill">
        <span className={isOpen ? "status-dot is-open" : "status-dot is-closed"} aria-hidden="true" />
        <ClockMark />
        {status ? (
          <>
            <span>{status.label}</span>
            <span className="status-when">
              {status.when} {status.time}
            </span>
          </>
        ) : (
          <span>{ui.hoursListed[lang]}</span>
        )}
      </TextLink>
    </div>
  );
}

function LangSwitch({ lang, paths, className = "lang-switch" }: { lang: Lang; paths: Record<Lang, string>; className?: string }) {
  return (
    <nav className={className} aria-label={ui.language[lang]}>
      {(["en", "es", "zh"] as const).map((code) =>
        code === lang ? (
          <span key={code} aria-current="page">
            {langLabel[code]}
          </span>
        ) : (
          <TextLink key={code} to={paths[code]}>
            {langLabel[code]}
          </TextLink>
        ),
      )}
    </nav>
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
  const paths = langPaths(pathname);
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
              <AddressLink className="mt-3">
                {loc.street}
                <br />
                {loc.city}, {loc.region} {loc.postal}
              </AddressLink>
              <p className="mt-2">
                <PhoneLink tel={loc.phoneTel}>{loc.phoneDisplay}</PhoneLink>
              </p>
              <HoursLine className="mt-1 text-sm text-muted">{loc.hours[lang]}</HoursLine>
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
        <LangSwitch lang={lang} paths={paths} />
        {locations[0].links.map((link) => (
          <a key={link.href} className="text-link inline-flex items-center gap-1" href={link.href} rel="noreferrer">
            {link.label === "Google" ? <GoogleMark /> : null}
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
            <PhoneDisc />
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
          {pageCopy.notFound[lang]}
        </h1>
        <TextLink to={pathFor(lang, "home")} className="btn btn-primary mt-8">
          {ui.home[lang]}
        </TextLink>
      </div>
    </Shell>
  );
}
