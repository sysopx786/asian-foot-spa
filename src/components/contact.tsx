import { useId, type ReactNode } from "react";
import type { Lang } from "@/content/site";
import { googleRating, googleReviewCount } from "@/content/google-reviews";
import { ClockMark, GoogleMark, MailMark, MapsPin, PhoneDisc } from "@/components/marks";

export const mapsPlaceUrl = "https://maps.google.com/?cid=9591416631560806305";

export function PhoneLink({
  tel,
  children,
  className = "",
}: {
  tel: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a className={`phone-link ${className}`.trim()} href={`tel:${tel}`}>
      <PhoneDisc />
      <span>{children}</span>
    </a>
  );
}

export function AddressLink({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <a className={`map-link ${className}`.trim()} href={mapsPlaceUrl} rel="noreferrer">
      <MapsPin />
      <span>{children}</span>
    </a>
  );
}

export function LinkedCopy({ text }: { text: string }) {
  const pattern = /245 Schuylkill Road|245 Schuylkill Rd|\(215\) 433-6969/g;
  const chunks: ReactNode[] = [];
  let last = 0;
  let match: RegExpExecArray | null;
  let i = 0;
  while ((match = pattern.exec(text))) {
    if (match.index > last) chunks.push(text.slice(last, match.index));
    if (match[0].startsWith("(")) {
      chunks.push(
        <PhoneLink key={`p-${i}`} tel="+12154336969">
          {match[0]}
        </PhoneLink>,
      );
    } else {
      chunks.push(<AddressLink key={`a-${i}`}>{match[0]}</AddressLink>);
    }
    last = match.index + match[0].length;
    i += 1;
  }
  if (last === 0) return <>{text}</>;
  if (last < text.length) chunks.push(text.slice(last));
  return <>{chunks}</>;
}

export function HoursLine({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`fact-line ${className}`.trim()}>
      <ClockMark />
      <span>{children}</span>
    </p>
  );
}

export function MailLink({ email }: { email: string }) {
  return (
    <a className="mail-link" href={`mailto:${email}`}>
      <MailMark />
      <span>{email}</span>
    </a>
  );
}

function GoldStar({ fraction, gradientId }: { fraction: number; gradientId: string }) {
  const amount = Math.min(1, Math.max(0, fraction));
  const fill = amount >= 1 ? "#FBBC04" : amount <= 0 ? "#E8EAED" : `url(#${gradientId})`;
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
      {amount > 0 && amount < 1 && (
        <defs>
          <linearGradient id={gradientId} x1="0" x2="1" y1="0" y2="0">
            <stop offset={`${amount * 100}%`} stopColor="#FBBC04" />
            <stop offset={`${amount * 100}%`} stopColor="#E8EAED" />
          </linearGradient>
        </defs>
      )}
      <path
        fill={fill}
        d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
      />
    </svg>
  );
}

export function GoogleReviewsButton({ lang }: { lang: Lang }) {
  const id = useId().replace(/:/g, "");
  const label =
    lang === "zh" ? "阅读 Google 评价" : lang === "es" ? "Leer reseñas de Google" : "Read Google reviews";
  const rated =
    lang === "zh"
      ? `4.4 分，${googleReviewCount} 条 Google 评价`
      : lang === "es"
        ? `4.4 de 5, ${googleReviewCount} reseñas de Google`
        : `4.4 out of 5 from ${googleReviewCount} Google reviews`;
  return (
    <a className="btn-google" href="#google-reviews">
      <GoogleMark />
      <span className="btn-google-score">{googleRating.toFixed(1)}</span>
      <span className="btn-google-stars" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((index) => (
          <GoldStar key={index} fraction={googleRating - index} gradientId={`${id}-${index}`} />
        ))}
      </span>
      <span className="btn-google-count">({googleReviewCount})</span>
      <span>{label}</span>
      <span className="sr-only">{rated}</span>
    </a>
  );
}
