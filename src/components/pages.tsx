import { useEffect, useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { Shell, TextLink } from "@/components/shell";
import { GoogleReviews } from "@/components/google-reviews";
import { AddressLink, GoogleReviewsButton, HoursLine, LinkedCopy, MailLink, PhoneLink } from "@/components/contact";
import { CardMark, CashMark, ClockMark, GoogleMark, MapsPin, PhoneDisc, WheelchairMark } from "@/components/marks";
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
  amenities,
  pageCopy,
  pathFor,
  rates,
  cardFees,
  paymentCopy,
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
  const [status, setStatus] = useState<ReturnType<typeof studioStatus> | null>(null);
  useEffect(() => {
    setStatus(studioStatus(open, close, lang));
  }, [open, close, lang]);
  const isOpen = status?.isOpen ?? false;
  return (
    <span className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 text-xs tracking-widest uppercase">
      <span
        className={isOpen ? "inline-block size-2 rounded-full bg-moss" : "inline-block size-2 rounded-full bg-bronze"}
        aria-hidden="true"
      />
      <ClockMark />
      {status ? (
        <>
          <span>{status.label}</span>
          <span className="text-muted">
            {status.when} {status.time}
          </span>
        </>
      ) : (
        ui.hoursListed[lang]
      )}
    </span>
  );
}

function MapBlock({ query, lang, title }: { query: string; lang: Lang; title: string }) {
  const [show, setShow] = useState(false);
  const src = `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=15&output=embed`;
  return (
    <div>
      <button type="button" className="btn btn-line" onClick={() => setShow((v) => !v)}>
        <MapsPin />
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
            <span className="text-sm tracking-wide">{rate.price === "Free" ? (lang === "es" ? "Gratis" : lang === "zh" ? "免费" : "Free") : rate.price}</span>
          </div>
        ))}
        <PaymentNote lang={lang} />
      </div>
    </div>
  );
}


function PaymentNote({ lang }: { lang: Lang }) {
  return (
    <section className="pay-note" aria-labelledby="pay-note-heading">
      <h3 id="pay-note-heading" className="font-display text-2xl">
        {paymentCopy.title[lang]}
      </h3>
      <p className="mt-3 text-sm text-muted">{paymentCopy.lead[lang]}</p>
      <div className="pay-table-wrap">
        <table className="pay-table">
          <caption className="sr-only">{paymentCopy.title[lang]}</caption>
          <thead>
            <tr>
              <th scope="col">
                <span className="marked">
                  <CashMark />
                  <span>{paymentCopy.columns.cash[lang]}</span>
                </span>
              </th>
              <th scope="col">{paymentCopy.columns.fee[lang]}</th>
              <th scope="col">
                <span className="marked">
                  <CardMark />
                  <span>{paymentCopy.columns.total[lang]}</span>
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {cardFees.map((row) => (
              <tr key={row.cash}>
                <td>{row.cash}</td>
                <td>{row.fee}</td>
                <td>{row.card}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h4 className="mt-6 text-sm font-medium tracking-wide">{paymentCopy.notesTitle[lang]}</h4>
      <ul className="pay-notes">
        {paymentCopy.notes.map((note) => (
          <li key={note.en}>{note[lang]}</li>
        ))}
      </ul>
    </section>
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
        slogan: pageCopy.heroTitle[lang],
      },
      ...locations.map((loc) => ({
        "@type": "DaySpa",
        name: `Asian Foot Spa ${loc.name.en}`,
        telephone: loc.phoneTel,
        paymentAccepted: "Cash, Credit card, Debit card, NFC mobile payments",
        amenityFeature: {
          "@type": "LocationFeatureSpecification",
          name: "Wheelchair accessible parking lot",
          value: true,
        },
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
      <section className="wrap pt-8 pb-6 lg:pt-10">
        <p className="eyebrow">
          <AddressLink>{brand.region[lang]}</AddressLink>
        </p>
        <h1 className="mt-4 max-w-xl text-balance font-display text-5xl sm:text-6xl">
          {pageCopy.heroTitle[lang]}
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted">
          <LinkedCopy text={pageCopy.heroLede[lang]} />
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a className="btn btn-primary" href={`tel:${locations[0].phoneTel}`}>
            <PhoneDisc />
            {locations[0].phoneDisplay}
          </a>
          <GoogleReviewsButton lang={lang} />
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
        <RateBoard lang={lang} />
      </section>

      <section className="bg-paper-2 py-14" aria-labelledby="studios-heading">
        <div className="wrap">
          <p className="eyebrow">02</p>
          <h2 id="studios-heading" className="mt-2 font-display text-4xl">
            {pageCopy.rooms[lang]}
          </h2>
          <div className="mt-8 grid gap-10">
            {gallery.slice(1, 6).map((item) => (
              <article key={item.src} className="grid items-start gap-6 border-t border-line pt-6 lg:grid-cols-12">
                <div className="frame-square lg:col-span-5">
                  <img src={item.src} alt={item.alt[lang]} width={1024} height={1025} />
                </div>
                <p className="text-muted lg:col-span-7">
                  <LinkedCopy text={item.caption[lang]} />
                </p>
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
            {pageCopy.needIntro[lang]}
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
            <img src={gallery[7].src} alt={gallery[7].alt[lang]} width={1024} height={1025} />
          </div>
          <div className="lg:col-span-7">
            <p className="eyebrow">04</p>
            <h2 className="mt-2 font-display text-4xl">
              {pageCopy.stonesHeading[lang]}
            </h2>
            <p className="mt-4 text-muted">
              <LinkedCopy text={gallery[7].caption[lang]} />
            </p>
            <TextLink className="btn btn-line mt-6" to={pathFor(lang, "gallery")}>
              {ui.navGallery[lang]}
            </TextLink>
          </div>
        </div>
      </section>

      <section className="wrap grid gap-8 py-4 pb-16 md:grid-cols-2">
        <div className="frame-square">
          <img src={gallery[6].src} alt={gallery[6].alt[lang]} width={1024} height={1025} />
        </div>
        <div className="flex flex-col justify-end">
          <p className="eyebrow">05</p>
          <h2 className="mt-2 font-display text-4xl">
            {pageCopy.callBefore[lang]}
          </h2>
          <p className="mt-4 max-w-md text-muted">
            {pageCopy.noForm[lang]}
          </p>
          <TextLink className="btn btn-primary mt-6 self-start" to={pathFor(lang, "visit")}>
            {ui.navVisit[lang]}
          </TextLink>
        </div>
      </section>
      <GoogleReviews lang={lang} heading="h2" />
      <FaqList lang={lang} heading />
      <Amenities lang={lang} />
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
        price: rate.price === "Free" ? "0" : rate.price.replace("$", ""),
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
            {pageCopy.expect[lang]}
          </h2>
          <p className="mt-3 text-muted">{service.expect[lang]}</p>
          <h2 className="mt-8 font-display text-3xl">
            {pageCopy.goodFit[lang]}
          </h2>
          <p className="mt-3 text-muted">{service.goodFor[lang]}</p>
          <h2 className="mt-8 font-display text-3xl">
            {pageCopy.notThis[lang]}
          </h2>
          <p className="mt-3 text-muted">{service.limit[lang]}</p>
          <p className="mt-8 text-sm text-muted">{service.studios[lang]}</p>
        </div>
        <aside className="h-fit border border-line p-5 lg:col-span-5">
          <p className="eyebrow">{pageCopy.bookPhone[lang]}</p>
          <div className="mt-4 grid gap-3">
            {locations.map((loc) => (
              <a key={loc.slug} className="btn btn-primary" href={`tel:${loc.phoneTel}`}>
                <PhoneDisc />
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
          {pageCopy.studio[lang]}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          <LinkedCopy text={pageCopy.locationsLede[lang]} />
        </p>
      </header>
      <figure className="wrap pt-8">
        <div className="frame-square max-w-xl">
          <img src={gallery[0].src} alt={gallery[0].alt[lang]} width={1024} height={1025} />
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
              <AddressLink className="mt-3">{formatAddress(loc.slug)}</AddressLink>
              <p className="mt-2">
                <PhoneLink tel={loc.phoneTel}>{loc.phoneDisplay}</PhoneLink>
              </p>
              <HoursLine className="mt-2">{loc.hours[lang]}</HoursLine>
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
    paymentAccepted: "Cash, Credit card, Debit card, NFC mobile payments",
    amenityFeature: {
      "@type": "LocationFeatureSpecification",
      name: "Wheelchair accessible parking lot",
      value: true,
    },
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
          <AddressLink className="mt-4 text-lg">
            {loc.street}
            <br />
            {loc.city}, {loc.region} {loc.postal}
          </AddressLink>
          <HoursLine className="mt-2">{loc.hours[lang]}</HoursLine>
          <p className="mt-2 text-sm text-muted">{loc.hoursNote[lang]}</p>
          <Amenities lang={lang} compact />
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn btn-primary" href={`tel:${loc.phoneTel}`}>
              <PhoneDisc />
              {loc.phoneDisplay}
            </a>
            <a className="btn btn-line" href={directions}>
              <MapsPin />
              {ui.directions[lang]}
            </a>
          </div>
          <div className="mt-6">
            <MapBlock query={query} lang={lang} title={loc.name[lang]} />
          </div>
          <p className="mt-8 text-muted">
            <LinkedCopy text={loc.detail[lang]} />
          </p>
          <h2 className="mt-8 font-display text-3xl">
            {pageCopy.closer[lang]}
          </h2>
          <p className="mt-3 text-muted">{loc.nearby[lang]}</p>
          {loc.email && (
            <p className="mt-6 text-sm text-muted">
              {pageCopy.emailListed[lang]} <MailLink email={loc.email} />
            </p>
          )}
        </div>
        <aside className="lg:col-span-5">
          <h2 className="font-display text-3xl">
            {pageCopy.ratings[lang]}
          </h2>
          <ul className="mt-4">
            {loc.ratings.map((rating) => (
              <li key={rating.href} className="border-t border-line py-4">
                <p className="font-display text-2xl">
                  {rating.source === "Google" ? <GoogleMark /> : null} {rating.source} · {rating.figure[lang]}
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
      <GoogleReviews lang={lang} />
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
        <h1 className="font-display text-5xl">{pageCopy.faqHeading[lang]}</h1>
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
                    <Accordion.Content className="faq-panel">
                      <LinkedCopy text={faq.a[lang]} />
                    </Accordion.Content>
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
        <p className="mt-4 max-w-2xl text-lg text-muted">
          <LinkedCopy text={ui.illustrative[lang]} />
        </p>
      </header>
      <div className="wrap grid gap-8 py-10 pb-16 sm:grid-cols-2">
        {gallery.map((item) => (
          <figure key={item.src} className={item.frame === "frame-wide" ? "sm:col-span-2" : ""}>
            <div className={item.frame}>
              <img src={item.src} alt={item.alt[lang]} />
            </div>
            <figcaption className="mt-3 max-w-3xl text-muted">
              <LinkedCopy text={item.caption[lang]} />
            </figcaption>
          </figure>
        ))}
      </div>
    </Shell>
  );
}

export function VisitPage({ lang }: { lang: Lang }) {
  return (
    <Shell lang={lang}>
      <Crumbs lang={lang} items={[{ href: pathFor(lang, "visit"), label: ui.navVisit[lang] }]} />
      <header className="wrap pt-8">
        <h1 className="font-display text-5xl">{pageCopy.visitHeading[lang]}</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">{pageCopy.visitLede[lang]}</p>
      </header>
      <ol className="wrap grid gap-8 py-10 md:grid-cols-3">
        {pageCopy.visitSteps.map((step, index) => (
          <li key={step.title.en} className="border-t border-line pt-4">
            <p className="eyebrow">0{index + 1}</p>
            <h2 className="mt-2 font-display text-3xl">
              <LinkedCopy text={step.title[lang]} />
            </h2>
            <p className="mt-3 text-muted">
              <LinkedCopy text={step.body[lang]} />
            </p>
          </li>
        ))}
      </ol>
      <Amenities lang={lang} />
      <section className="wrap grid gap-10 pb-16 lg:grid-cols-2">
        {locations.map((loc) => (
          <article key={loc.slug} className="border border-line p-5" id={loc.slug}>
            <h2 className="font-display text-4xl">{loc.name[lang]}</h2>
            <AddressLink className="mt-3">{formatAddress(loc.slug)}</AddressLink>
            <p className="mt-2">
              <PhoneLink tel={loc.phoneTel}>{loc.phoneDisplay}</PhoneLink>
            </p>
            <HoursLine className="mt-2">{loc.hours[lang]}</HoursLine>
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
  return (
    <Shell lang={lang}>
      <Crumbs lang={lang} items={[{ href: pathFor(lang, "privacy"), label: ui.privacy[lang] }]} />
      <article className="wrap-narrow py-8 pb-16">
        <h1 className="font-display text-5xl">{ui.privacy[lang]}</h1>
        {pageCopy.privacyBlocks.map((block) => (
          <section key={block.title.en} className="mt-8">
            <h2 className="font-display text-3xl">{block.title[lang]}</h2>
            <p className="mt-3 text-muted">
              <LinkedCopy text={block.body[lang]} />
            </p>
          </section>
        ))}
        <p className="mt-10 text-sm text-muted">{pageCopy.privacyChecked[lang]}</p>
      </article>
    </Shell>
  );
}

function Amenities({ lang, compact = false }: { lang: Lang; compact?: boolean }) {
  return (
    <section className={compact ? "mt-8" : "border-t border-line"}>
      <div className={compact ? "grid gap-8 sm:grid-cols-2" : "wrap grid gap-10 py-14 sm:grid-cols-2"}>
        {amenities.map((group) => (
          <div key={group.title.en}>
            <h2 className="font-display text-3xl">{group.title[lang]}</h2>
            <ul className="mt-3">
              {group.items.map((item) => (
                <li key={item.en} className="border-t border-line py-3">
                  <span className="marked">
                    {item.en.includes("Wheelchair") ? <WheelchairMark /> : null}
                    {item.en.startsWith("Cash") ? <CashMark /> : null}
                    {item.en.includes("card") || item.en.includes("NFC") ? <CardMark /> : null}
                    <span>{item[lang]}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function faqSchema(lang: Lang) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q[lang],
      acceptedAnswer: { "@type": "Answer", text: faq.a[lang] },
    })),
  };
}

function FaqList({ lang, heading = false }: { lang: Lang; heading?: boolean }) {
  const groups = ["visit", "menu", "practical"] as const;
  return (
    <section className={heading ? "border-t border-line" : undefined} aria-labelledby={heading ? "faq-heading" : undefined}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(faqSchema(lang)) }} />
      <div className={heading ? "wrap py-14 pb-16" : "wrap pb-16"}>
        {heading && (
          <h2 id="faq-heading" className="font-display text-4xl">
            {pageCopy.faqHeading[lang]}
          </h2>
        )}
        {groups.map((group) => (
          <div key={group} className="mt-8">
            <h3 className="font-display text-3xl">{ui.groups[group][lang]}</h3>
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
                    <Accordion.Content className="faq-panel">
                      <LinkedCopy text={faq.a[lang]} />
                    </Accordion.Content>
                  </Accordion.Item>
                ))}
            </Accordion.Root>
          </div>
        ))}
      </div>
    </section>
  );
}
