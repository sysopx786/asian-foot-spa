import { useEffect, useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { Shell, TextLink } from "@/components/shell";
import { GoogleReviews } from "@/components/google-reviews";
import {
  brand,
  crumbs,
  faqs,
  formatAddress,
  gallery,
  getLocation,
  getService,
  locationPath,
  locations,
  menuPhoto,
  pathFor,
  rates,
  cardFinePrint,
  servicePath,
  services,
  ui,
  type Lang,
} from "@/content/site";
import { studioStatus } from "@/lib/hours";
import { jsonLdScript } from "@/lib/seo";

function Crumbs({ lang, items }: { lang: Lang; items: Array<{ href: string; label: string }> }) {
  return (
    <nav className="wrap pt-8 text-sm text-muted" aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <TextLink className="text-link" to={pathFor(lang, "home")}>
            {ui.home[lang]}
          </TextLink>
        </li>
        {items.map((item) => (
          <li key={item.href} className="flex items-center gap-2">
            <span aria-hidden="true">/</span>
            <TextLink className="text-link" to={item.href}>
              {item.label}
            </TextLink>
          </li>
        ))}
      </ol>
    </nav>
  );
}

function Status({ open, close, lang }: { open: string; close: string; lang: Lang }) {
  const [label, setLabel] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const status = studioStatus(open, close, lang);
    setLabel(status.label);
    setIsOpen(status.isOpen);
  }, [open, close, lang]);
  return (
    <span className="inline-flex items-center gap-2 text-xs tracking-widest uppercase">
      <span
        className={isOpen ? "inline-block size-2 rounded-full bg-moss" : "inline-block size-2 rounded-full bg-bronze"}
        aria-hidden="true"
      />
      {label ?? ui.hoursListed[lang]}
    </span>
  );
}

function MapBlock({ query, lang, title }: { query: string; lang: Lang; title: string }) {
  const [show, setShow] = useState(false);
  const src = `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=15&output=embed`;
  return (
    <div>
      <button type="button" className="btn btn-line" onClick={() => setShow((v) => !v)}>
        {show ? ui.hideMap[lang] : ui.showMap[lang]}
      </button>
      {show && (
        <iframe
          className="mt-4 h-72 w-full border border-line"
          title={`${ui.mapTitle[lang]} · ${title}`}
          src={src}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      )}
    </div>
  );
}

function RateBoard({ lang }: { lang: Lang }) {
  return (
    <div className="mt-8 grid items-start gap-8 lg:grid-cols-12">
      <figure className="lg:col-span-5">
        <div className="frame-tall">
          <img src={menuPhoto.src} alt={menuPhoto.alt[lang]} width={822} height={1096} />
        </div>
        <figcaption className="mt-3 text-sm text-muted">{menuPhoto.caption[lang]}</figcaption>
      </figure>
      <div className="lg:col-span-7">
        {rates.map((rate) => (
          <div key={rate.id} className="menu-row">
            <span>
              <span className="block font-display text-3xl">{rate.name[lang]}</span>
              <span className="mt-1 block text-sm text-muted">{rate.detail[lang]}</span>
            </span>
            <span className="text-sm tracking-wide">{rate.price}</span>
          </div>
        ))}
        <p className="mt-4 text-sm text-muted">{cardFinePrint[lang]}</p>
      </div>
    </div>
  );
}

export function HomePage({ lang }: { lang: Lang }) {
  const [need, setNeed] = useState(ui.needs[0].id);
  const chosen = ui.needs.find((item) => item.id === need) ?? ui.needs[0];
  const service = getService(chosen.service);
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Asian Foot Spa",
        slogan:
          lang === "en"
            ? "Quiet rooms. A posted menu. Pressure you can ask for."
            : "Salas tranquilas. Un menú publicado. La presión que usted pide.",
      },
      ...locations.map((loc) => ({
        "@type": "DaySpa",
        name: `Asian Foot Spa ${loc.name.en}`,
        telephone: loc.phoneTel,
        address: {
          "@type": "PostalAddress",
          streetAddress: loc.street,
          addressLocality: loc.city,
          addressRegion: "PA",
          postalCode: loc.postal,
          addressCountry: "US",
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: loc.open,
          closes: loc.close,
        },
      })),
    ],
  };

  return (
    <Shell lang={lang}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(graph) }} />
      <section className="wrap grid items-end gap-10 pt-8 pb-6 lg:grid-cols-12 lg:pt-10">
        <div className="lg:col-span-12">
          <p className="eyebrow">{brand.region[lang]}</p>
          <h1 className="mt-4 max-w-xl text-balance font-display text-5xl sm:text-6xl">
            {lang === "en"
              ? "Quiet rooms. A posted menu. Pressure you can ask for."
              : "Salas tranquilas. Un menú publicado. La presión que usted pide."}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted">
            {lang === "en"
              ? "Foot reflexology and body work at 245 Schuylkill Road. The door says open seven days, 10 a.m. to 9 p.m."
              : "Reflexología de pies y trabajo corporal en 245 Schuylkill Road. La puerta dice abierto los siete días, de 10 a. m. a 9 p. m."}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a className="btn btn-primary" href={`tel:${locations[0].phoneTel}`}>
              {locations[0].phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section className="wrap py-12" aria-labelledby="menu-heading">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">01</p>
            <h2 id="menu-heading" className="mt-2 font-display text-4xl">
              {ui.menuLabel[lang]}
            </h2>
          </div>
        </div>
        <p className="mt-4 max-w-xl text-muted">{ui.confirm[lang]}</p>
        <TextLink className="btn btn-line mt-6" to={pathFor(lang, "services")}>
          {ui.menuLabel[lang]}
        </TextLink>
      </section>

      <section className="bg-paper-2 py-14" aria-labelledby="studios-heading">
        <div className="wrap">
          <p className="eyebrow">02</p>
          <h2 id="studios-heading" className="mt-2 font-display text-4xl">
            {lang === "en" ? "The rooms" : "Las salas"}
          </h2>
          <div className="mt-8 grid gap-10">
            {gallery.slice(1, 6).map((item) => (
              <article key={item.src} className="grid items-start gap-6 border-t border-line pt-6 lg:grid-cols-12">
                <div className="frame-square lg:col-span-5">
                  <img src={item.src} alt={item.alt[lang]} width={1024} height={1025} />
                </div>
                <p className="text-muted lg:col-span-7">{item.caption[lang]}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap grid items-start gap-10 py-14 lg:grid-cols-12" aria-labelledby="need-heading">
        <div className="lg:col-span-4">
          <p className="eyebrow">03</p>
          <h2 id="need-heading" className="mt-2 font-display text-4xl">
            {ui.whatYouNeed[lang]}
          </h2>
          <p className="mt-3 text-muted">
            {lang === "en"
              ? "Pick the reason you are calling. The suggestion is a starting point, not a booking."
              : "Elija el motivo de la llamada. La sugerencia es un punto de partida, no una reserva."}
          </p>
        </div>
        <div className="lg:col-span-8">
          <div className="flex flex-wrap gap-2">
            {ui.needs.map((item) => (
              <button
                key={item.id}
                type="button"
                className={item.id === need ? "btn btn-primary" : "btn btn-line"}
                aria-pressed={item.id === need}
                onClick={() => setNeed(item.id)}
              >
                {item.label[lang]}
              </button>
            ))}
          </div>
          {service && (
            <div className="mt-8 border-t border-line pt-6">
              <p className="eyebrow">{ui.recommend[lang]}</p>
              <h3 className="mt-2 font-display text-4xl">{service.name[lang]}</h3>
              <p className="mt-3 max-w-xl text-muted">{chosen.note[lang]}</p>
              <TextLink className="btn btn-line mt-5" to={servicePath(lang, service.slug)}>
                {service.name[lang]}
              </TextLink>
            </div>
          )}
        </div>
      </section>

      <section className="border-t border-line">
        <div className="wrap grid items-start gap-8 py-14 lg:grid-cols-12">
          <div className="frame-square lg:col-span-5">
            <img src="/media/stones-session.jpg" alt={gallery[7].alt[lang]} width={1024} height={1025} />
          </div>
          <div className="lg:col-span-7">
            <p className="eyebrow">04</p>
            <h2 className="mt-2 font-display text-4xl">
              {lang === "en" ? "Hot stones on the table" : "Piedras calientes en la camilla"}
            </h2>
            <p className="mt-4 text-muted">{gallery[7].caption[lang]}</p>
            <TextLink className="btn btn-line mt-6" to={pathFor(lang, "gallery")}>
              {ui.navGallery[lang]}
            </TextLink>
          </div>
        </div>
      </section>

      <section className="wrap grid gap-8 py-4 pb-16 md:grid-cols-2">
        <div className="frame-square">
          <img src="/media/feet.jpg" alt={gallery[6].alt[lang]} width={1024} height={1025} />
        </div>
        <div className="flex flex-col justify-end">
          <p className="eyebrow">05</p>
          <h2 className="mt-2 font-display text-4xl">
            {lang === "en" ? "Call before you come." : "Llame antes de venir."}
          </h2>
          <p className="mt-4 max-w-md text-muted">
            {lang === "en"
              ? "There is no booking form. Call and say what you want."
              : "No hay formulario de reserva. Llame y diga lo que quiere."}
          </p>
          <TextLink className="btn btn-primary mt-6 self-start" to={pathFor(lang, "visit")}>
            {ui.navVisit[lang]}
          </TextLink>
        </div>
      </section>

      <GoogleReviews heading="h2" />
    </Shell>
  );
}

export function ServicesPage({ lang }: { lang: Lang }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: "Asian Foot Spa menu",
    hasMenuItem: rates.map((rate) => ({
      "@type": "MenuItem",
      name: rate.name.en,
      offers: {
        "@type": "Offer",
        price: rate.price.replace("$", ""),
        priceCurrency: "USD",
      },
    })),
  };
  return (
    <Shell lang={lang}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(schema) }} />
      <Crumbs lang={lang} items={[{ href: pathFor(lang, "services"), label: crumbs.services[lang] }]} />
      <header className="wrap pt-8 pb-4">
        <h1 className="max-w-3xl font-display text-5xl">{ui.menuLabel[lang]}</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">{ui.confirm[lang]}</p>
      </header>
      <div className="wrap">
        <RateBoard lang={lang} />
      </div>
      <div className="wrap pb-16">
        {services.map((service) => (
          <article key={service.slug} className="grid gap-3 border-t border-line py-8 md:grid-cols-12">
            <div className="md:col-span-4">
              <h2 className="font-display text-4xl">
                <TextLink className="text-link" to={servicePath(lang, service.slug)}>
                  {service.name[lang]}
                </TextLink>
              </h2>
            </div>
            <p className="text-muted md:col-span-8">{service.summary[lang]}</p>
          </article>
        ))}
      </div>
    </Shell>
  );
}

export function ServiceDetail({ lang, slug }: { lang: Lang; slug: string }) {
  const service = getService(slug);
  if (!service) return null;
  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name.en,
    serviceType: service.name.en,
    provider: { "@type": "DaySpa", name: "Asian Foot Spa" },
    areaServed: "Chester County, Pennsylvania",
    description: service.summary.en,
  };
  return (
    <Shell lang={lang}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(schema) }} />
      <Crumbs
        lang={lang}
        items={[
          { href: pathFor(lang, "services"), label: crumbs.services[lang] },
          { href: servicePath(lang, service.slug), label: service.name[lang] },
        ]}
      />
      <article className="wrap grid gap-10 py-8 pb-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="eyebrow">{service.minutes[lang]}</p>
          <h1 className="mt-3 font-display text-5xl">{service.name[lang]}</h1>
          <p className="mt-6 text-lg text-muted">{service.body[lang]}</p>
          <h2 className="mt-10 font-display text-3xl">
            {lang === "en" ? "What to expect" : "Qué esperar"}
          </h2>
          <p className="mt-3 text-muted">{service.expect[lang]}</p>
          <h2 className="mt-8 font-display text-3xl">
            {lang === "en" ? "A good fit when" : "Conviene cuando"}
          </h2>
          <p className="mt-3 text-muted">{service.goodFor[lang]}</p>
          <h2 className="mt-8 font-display text-3xl">
            {lang === "en" ? "Not this, if" : "No es esto, si"}
          </h2>
          <p className="mt-3 text-muted">{service.limit[lang]}</p>
          <p className="mt-8 text-sm text-muted">{service.studios[lang]}</p>
        </div>
        <aside className="h-fit border border-line p-5 lg:col-span-5">
          <p className="eyebrow">{lang === "en" ? "Book by phone" : "Reserve por teléfono"}</p>
          <div className="mt-4 grid gap-3">
            {locations.map((loc) => (
              <a key={loc.slug} className="btn btn-primary" href={`tel:${loc.phoneTel}`}>
                {loc.name[lang]} · {loc.phoneDisplay}
              </a>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted">{ui.notMedical[lang]}</p>
          <h2 className="mt-8 font-display text-2xl">{ui.related[lang]}</h2>
          <ul className="mt-3">
            {related.map((item) => (
              <li key={item.slug}>
                <TextLink className="text-link inline-block py-1" to={servicePath(lang, item.slug)}>
                  {item.name[lang]}
                </TextLink>
              </li>
            ))}
          </ul>
        </aside>
      </article>
    </Shell>
  );
}

export function LocationsPage({ lang }: { lang: Lang }) {
  return (
    <Shell lang={lang}>
      <Crumbs lang={lang} items={[{ href: pathFor(lang, "locations"), label: crumbs.locations[lang] }]} />
      <header className="wrap pt-8">
        <h1 className="font-display text-5xl">
          {lang === "en" ? "The studio" : "El estudio"}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          {lang === "en"
            ? "One address: 245 Schuylkill Road. The hours and the phone are printed on the door. The map loads only if you ask for it."
            : "Una dirección: 245 Schuylkill Road. El horario y el teléfono están impresos en la puerta. El mapa se carga solo si usted lo pide."}
        </p>
      </header>
      <figure className="wrap pt-8">
        <div className="frame-square max-w-xl">
          <img src="/media/storefront.jpg" alt={gallery[0].alt[lang]} width={1024} height={1025} />
        </div>
        <figcaption className="mt-3 text-sm text-muted">{gallery[0].caption[lang]}</figcaption>
      </figure>
      <div className="wrap grid gap-12 py-10 pb-16">
        {locations.map((loc) => (
          <article key={loc.slug} className="grid gap-6 border-t border-line pt-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Status open={loc.open} close={loc.close} lang={lang} />
              <h2 className="mt-3 font-display text-4xl">
                <TextLink className="text-link" to={locationPath(lang, loc.slug)}>
                  {loc.name[lang]}
                </TextLink>
              </h2>
              <p className="mt-3">
                {formatAddress(loc.slug)}
                <br />
                <a className="text-link" href={`tel:${loc.phoneTel}`}>
                  {loc.phoneDisplay}
                </a>
              </p>
              <p className="mt-2">{loc.hours[lang]}</p>
            </div>
            <p className="text-muted lg:col-span-7">{loc.detail[lang]}</p>
          </article>
        ))}
      </div>
    </Shell>
  );
}

export function LocationDetail({ lang, slug }: { lang: Lang; slug: string }) {
  const loc = getLocation(slug);
  if (!loc) return null;
  const query = formatAddress(loc.slug);
  const directions = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "DaySpa",
    name: `Asian Foot Spa ${loc.name.en}`,
    telephone: loc.phoneTel,
    address: {
      "@type": "PostalAddress",
      streetAddress: loc.street,
      addressLocality: loc.city,
      addressRegion: "PA",
      postalCode: loc.postal,
      addressCountry: "US",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: loc.open,
      closes: loc.close,
    },
  };
  return (
    <Shell lang={lang}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(schema) }} />
      <Crumbs
        lang={lang}
        items={[
          { href: pathFor(lang, "locations"), label: crumbs.locations[lang] },
          { href: locationPath(lang, loc.slug), label: loc.name[lang] },
        ]}
      />
      <article className="wrap grid gap-10 py-8 pb-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Status open={loc.open} close={loc.close} lang={lang} />
          <h1 className="mt-3 font-display text-5xl">{loc.name[lang]}</h1>
          <p className="mt-4 text-lg">
            {loc.street}
            <br />
            {loc.city}, {loc.region} {loc.postal}
          </p>
          <p className="mt-2">{loc.hours[lang]}</p>
          <p className="mt-2 text-sm text-muted">{loc.hoursNote[lang]}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn btn-primary" href={`tel:${loc.phoneTel}`}>
              {loc.phoneDisplay}
            </a>
            <a className="btn btn-line" href={directions}>
              {ui.directions[lang]}
            </a>
          </div>
          <div className="mt-6">
            <MapBlock query={query} lang={lang} title={loc.name[lang]} />
          </div>
          <p className="mt-8 text-muted">{loc.detail[lang]}</p>
          <h2 className="mt-8 font-display text-3xl">
            {lang === "en" ? "Who this desk is closer for" : "Para quién queda más cerca"}
          </h2>
          <p className="mt-3 text-muted">{loc.nearby[lang]}</p>
          {loc.email && (
            <p className="mt-6 text-sm text-muted">
              {lang === "en"
                ? "Email listed on the Phoenixville Facebook page: "
                : "Correo listado en la página de Facebook de Phoenixville: "}
              <a className="text-link" href={`mailto:${loc.email}`}>
                {loc.email}
              </a>
            </p>
          )}
        </div>
        <aside className="lg:col-span-5">
          <h2 className="font-display text-3xl">
            {lang === "en" ? "Public ratings" : "Calificaciones públicas"}
          </h2>
          <ul className="mt-4">
            {loc.ratings.map((rating) => (
              <li key={rating.href} className="border-t border-line py-4">
                <p className="font-display text-2xl">
                  {rating.source} · {rating.figure[lang]}
                </p>
                <p className="mt-2 text-sm text-muted">{rating.note[lang]}</p>
                <a className="text-link mt-2 inline-block text-sm" href={rating.href}>
                  {rating.source}
                </a>
              </li>
            ))}
          </ul>
          <h2 className="mt-8 font-display text-2xl">{ui.navServices[lang]}</h2>
          <ul className="mt-2">
            {services.slice(0, 5).map((service) => (
              <li key={service.slug}>
                <TextLink className="text-link inline-block py-1" to={servicePath(lang, service.slug)}>
                  {service.name[lang]}
                </TextLink>
              </li>
            ))}
          </ul>
        </aside>
      </article>
    </Shell>
  );
}

export function ReviewsPage({ lang }: { lang: Lang }) {
  return (
    <Shell lang={lang}>
      <GoogleReviews />
    </Shell>
  );
}

export function FaqPage({ lang }: { lang: Lang }) {
  const groups = ["visit", "menu", "practical"] as const;
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q[lang],
      acceptedAnswer: { "@type": "Answer", text: faq.a[lang] },
    })),
  };
  return (
    <Shell lang={lang}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(schema) }} />
      <Crumbs lang={lang} items={[{ href: pathFor(lang, "faq"), label: ui.navFaq[lang] }]} />
      <header className="wrap pt-8 pb-6">
        <h1 className="font-display text-5xl">
          {lang === "en" ? "Questions worth a straight answer" : "Preguntas que merecen una respuesta directa"}
        </h1>
      </header>
      <div className="wrap pb-16">
        {groups.map((group) => (
          <section key={group} className="mt-8" aria-labelledby={`group-${group}`}>
            <h2 id={`group-${group}`} className="font-display text-3xl">
              {ui.groups[group][lang]}
            </h2>
            <Accordion.Root type="single" collapsible className="mt-2">
              {faqs
                .filter((faq) => faq.group === group)
                .map((faq) => (
                  <Accordion.Item key={faq.id} value={faq.id} id={faq.id} className="scroll-mt-28">
                    <Accordion.Header>
                      <Accordion.Trigger className="faq-trigger group">
                        {faq.q[lang]}
                        <ChevronDown className="size-5 shrink-0" aria-hidden="true" />
                      </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="faq-panel">{faq.a[lang]}</Accordion.Content>
                  </Accordion.Item>
                ))}
            </Accordion.Root>
          </section>
        ))}
      </div>
    </Shell>
  );
}

export function GalleryPage({ lang }: { lang: Lang }) {
  return (
    <Shell lang={lang}>
      <Crumbs lang={lang} items={[{ href: pathFor(lang, "gallery"), label: ui.navGallery[lang] }]} />
      <header className="wrap pt-8">
        <h1 className="font-display text-5xl">{ui.navGallery[lang]}</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">{ui.illustrative[lang]}</p>
      </header>
      <div className="wrap grid gap-8 py-10 pb-16 sm:grid-cols-2">
        {gallery.map((item) => (
          <figure key={item.src} className={item.frame === "frame-wide" ? "sm:col-span-2" : ""}>
            <div className={item.frame}>
              <img src={item.src} alt={item.alt[lang]} />
            </div>
            <figcaption className="mt-3 max-w-3xl text-muted">{item.caption[lang]}</figcaption>
          </figure>
        ))}
      </div>
    </Shell>
  );
}

export function VisitPage({ lang }: { lang: Lang }) {
  const steps =
    lang === "en"
      ? [
          ["Call the studio", "The only number is (215) 433-6969. Say feet or body work, the day, and whether you want hot stones."],
          ["Come to 245 Schuylkill Road", "The lighted sign is Asian Foot Spa. You will see the waiting room first: gray sofa, blue walls, yellow paper fans. The red recliner is in the room with the foot chart. Body work, the stones, and the photographed foot session are on the table with the white sheet."],
          ["Say what you want in the room", "Pressure, scent, and stones can all be changed once you are there. The stones should feel warm. If they do not, say so."],
        ]
      : [
          ["Llame al estudio", "El único número es (215) 433-6969. Diga pies o trabajo corporal, el día y si quiere piedras calientes."],
          ["Venga a 245 Schuylkill Road", "El letrero iluminado dice Asian Foot Spa. Primero verá la sala de espera: sofá gris, paredes azules, abanicos de papel amarillos. El sillón rojo está en la sala del cuadro de los pies. El trabajo corporal, las piedras y la sesión de pies fotografiada son en la camilla con la sábana blanca."],
          ["Diga lo que quiere en la sala", "La presión, el aroma y las piedras se pueden cambiar cuando ya está ahí. Las piedras deben sentirse tibias. Si no, dígalo."],
        ];
  return (
    <Shell lang={lang}>
      <Crumbs lang={lang} items={[{ href: pathFor(lang, "visit"), label: ui.navVisit[lang] }]} />
      <header className="wrap pt-8">
        <h1 className="font-display text-5xl">
          {lang === "en" ? "How a visit goes" : "Cómo es una visita"}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          {lang === "en"
            ? "No form, no chatbot, no deposit on this website. The appointment is a phone call."
            : "En este sitio no hay formulario, ni chatbot, ni depósito. La cita es una llamada."}
        </p>
      </header>
      <ol className="wrap grid gap-8 py-10 md:grid-cols-3">
        {steps.map(([title, body], index) => (
          <li key={title} className="border-t border-line pt-4">
            <p className="eyebrow">0{index + 1}</p>
            <h2 className="mt-2 font-display text-3xl">{title}</h2>
            <p className="mt-3 text-muted">{body}</p>
          </li>
        ))}
      </ol>
      <section className="wrap grid gap-10 pb-16 lg:grid-cols-2">
        {locations.map((loc) => (
          <article key={loc.slug} className="border border-line p-5" id={loc.slug}>
            <h2 className="font-display text-4xl">{loc.name[lang]}</h2>
            <p className="mt-3">
              {formatAddress(loc.slug)}
              <br />
              <a className="text-link" href={`tel:${loc.phoneTel}`}>
                {loc.phoneDisplay}
              </a>
              <br />
              {loc.hours[lang]}
            </p>
            <p className="mt-3 text-sm text-muted">{loc.hoursNote[lang]}</p>
            <div className="mt-5">
              <MapBlock query={formatAddress(loc.slug)} lang={lang} title={loc.name[lang]} />
            </div>
          </article>
        ))}
      </section>
    </Shell>
  );
}

export function PrivacyPage({ lang }: { lang: Lang }) {
  const blocks =
    lang === "en"
      ? [
          ["What this site is", "A public brochure for Asian Foot Spa. It does not take bookings, payments, newsletters, or accounts. There is no form that stores your name."],
          ["Calls and email", "Phone links open your own dialer. The Phoenixville email is the address published on that studio’s Facebook page. Messages you send go to them, not to this website."],
          ["Maps", "Google Maps is not loaded until you press Show map. After that, Google receives the usual map request, including your IP address, under Google’s own terms."],
          ["Outbound links", "Reviews, Facebook, Yelp, MapQuest, Tripadvisor, and directions leave this site. Those companies set their own cookies."],
          ["Photos", "The photographs show the Phoenixville studio at 245 Schuylkill Road: the storefront, the waiting room, the treatment table, the reflexology chair, a foot session, and hot stones."],
          ["Language", "English and Spanish pages carry the same facts. The Spanish text is a translation of the site, not a claim that every appointment is conducted in Spanish."],
        ]
      : [
          ["Qué es este sitio", "Un folleto público de Asian Foot Spa. No toma reservas, pagos, boletines ni cuentas. No hay un formulario que guarde su nombre."],
          ["Llamadas y correo", "Los enlaces de teléfono abren su propio marcador. El correo de Phoenixville es la dirección publicada en la página de Facebook de ese estudio. Los mensajes van a ellos, no a este sitio."],
          ["Mapas", "Google Maps no se carga hasta que pulsa Ver mapa. Después, Google recibe la solicitud habitual, incluida su dirección IP, según los términos de Google."],
          ["Enlaces externos", "Reseñas, Facebook, Yelp, MapQuest, Tripadvisor y las indicaciones salen de este sitio. Esas empresas ponen sus propias cookies."],
          ["Fotos", "Las fotografías muestran el estudio de Phoenixville en 245 Schuylkill Road: la fachada, la sala de espera, la camilla, el sillón de reflexología, una sesión de pies y las piedras calientes."],
          ["Idioma", "Las páginas en inglés y en español llevan los mismos hechos. El texto en español es una traducción del sitio, no una afirmación de que cada cita se hace en español."],
        ];
  return (
    <Shell lang={lang}>
      <Crumbs lang={lang} items={[{ href: pathFor(lang, "privacy"), label: ui.privacy[lang] }]} />
      <article className="wrap-narrow py-8 pb-16">
        <h1 className="font-display text-5xl">{ui.privacy[lang]}</h1>
        {blocks.map(([title, body]) => (
          <section key={title} className="mt-8">
            <h2 className="font-display text-3xl">{title}</h2>
            <p className="mt-3 text-muted">{body}</p>
          </section>
        ))}
        <p className="mt-10 text-sm text-muted">
          {lang === "en"
            ? "Business details were checked against public listings on October 2, 2026. Hours, prices, and offers should still be confirmed by phone."
            : "Los datos del negocio se contrastaron con listados públicos el 2 de octubre de 2026. Horarios, precios y ofertas deben confirmarse por teléfono."}
        </p>
      </article>
    </Shell>
  );
}
