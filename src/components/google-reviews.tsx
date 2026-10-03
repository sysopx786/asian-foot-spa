import { useId } from "react";
import type { Lang } from "@/content/site";
import { GoogleMark } from "@/components/marks";
import {
  barFills,
  googleRating,
  googleReviewCount,
  googleReviews,
  googleReviewsUrl,
  googleWriteReviewUrl,
  reviewIn,
  type GoogleReview,
} from "@/content/google-reviews";

const STAR =
  "M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z";

function Star({ fraction, size, empty }: { fraction: number; size: number; empty: string }) {
  const id = useId().replace(/:/g, "");
  const amount = Math.min(1, Math.max(0, fraction));
  const fill = amount >= 1 ? "#fbbc04" : amount <= 0 ? empty : `url(#${id})`;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      {amount > 0 && amount < 1 && (
        <defs>
          <linearGradient id={id} x1="0" x2="1" y1="0" y2="0">
            <stop offset={`${amount * 100}%`} stopColor="#fbbc04" />
            <stop offset={`${amount * 100}%`} stopColor={empty} />
          </linearGradient>
        </defs>
      )}
      <path d={STAR} fill={fill} />
    </svg>
  );
}

function StarRow({ value, size, empty }: { value: number; size: number; empty: string }) {
  return (
    <span className="g-stars" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((index) => (
        <Star key={index} fraction={value - index} size={size} empty={empty} />
      ))}
    </span>
  );
}

function Avatar({ review }: { review: GoogleReview }) {
  return (
    <span className="g-avatar" style={{ background: review.color }} aria-hidden="true">
      {review.letter}
      {review.guide && (
        <span className="g-guide">
          <svg width="8" height="8" viewBox="0 0 24 24" aria-hidden="true">
            <path d={STAR} fill="#fff" />
          </svg>
        </span>
      )}
    </span>
  );
}

function countPhrase(count: string, one: string, many: string) {
  return count === "1" ? one : many.replace("{n}", count);
}

function localizeMeta(meta: string, lang: Lang) {
  if (lang === "en") return meta;
  const guide = meta.startsWith("Local Guide");
  const reviews = meta.match(/(\d[\d,]*) reviews?/);
  const photos = meta.match(/(\d[\d,]*) photos?/);
  const parts: string[] = [];
  if (guide) parts.push(lang === "zh" ? "本地向导" : "Guía local");
  if (reviews) {
    parts.push(
      lang === "zh"
        ? `${reviews[1]} 条评价`
        : countPhrase(reviews[1], "1 reseña", "{n} reseñas"),
    );
  }
  if (photos) {
    parts.push(
      lang === "zh" ? `${photos[1]} 张照片` : countPhrase(photos[1], "1 foto", "{n} fotos"),
    );
  }
  return parts.join(lang === "zh" ? " · " : " · ") || meta;
}

function localizeWhen(when: string, lang: Lang) {
  if (lang === "en") return when;
  const edited = when.startsWith("Edited ");
  const rest = edited ? when.slice("Edited ".length) : when;
  let phrase = rest;
  if (rest === "a year ago") phrase = lang === "zh" ? "1 年前" : "hace un año";
  const months = rest.match(/^(\d+) months ago$/);
  const years = rest.match(/^(\d+) years ago$/);
  if (months) phrase = lang === "zh" ? `${months[1]} 个月前` : `hace ${months[1]} meses`;
  if (years) phrase = lang === "zh" ? `${years[1]} 年前` : `hace ${years[1]} años`;
  if (!edited) return phrase;
  return lang === "zh" ? `编辑于${phrase}` : `Editada ${phrase}`;
}

const labels: Record<string, { es: string; zh: string }> = {
  Overpriced: { es: "Demasiado caro", zh: "偏贵" },
  "Reasonable price": { es: "Precio razonable", zh: "价格合理" },
  "Great price": { es: "Muy buen precio", zh: "价格很好" },
};

const replies: Record<string, { es: string; zh: string }> = {
  "We are very happy to get your approval! Looking forward to your next visit!": {
    es: "Nos alegra mucho su aprobación. Esperamos su próxima visita.",
    zh: "很高兴得到您的认可！期待您下次光临！",
  },
  "Thank you for coming. We will try our best to do better, thank you": {
    es: "Gracias por venir. Haremos lo posible por hacerlo mejor, gracias.",
    zh: "谢谢您的光临。我们会尽量做得更好，谢谢。",
  },
  "Thank you for your approval! Looking forward to seeing you again!": {
    es: "Gracias por su aprobación. Esperamos verle de nuevo.",
    zh: "谢谢您的认可！期待再次见到您！",
  },
};

function ReviewCard({ review, lang }: { review: GoogleReview; lang: Lang }) {
  const moreBtn = lang === "zh" ? "更多" : lang === "es" ? "Más" : "More";
  const owner = lang === "zh" ? "Asian Foot Spa（店主）" : lang === "es" ? "Asian Foot Spa (propietario)" : "Asian Foot Spa (Owner)";
  const replyText = review.reply ? replies[review.reply.text]?.[lang === "zh" ? "zh" : "es"] : undefined;
  return (
    <article className="g-card">
      <div className="g-card-top">
        <Avatar review={review} />
        <div>
          <p className="g-name">{review.name}</p>
          <p className="g-meta">{localizeMeta(review.meta, lang)}</p>
        </div>
        <button type="button" className="g-dots" aria-label={lang === "zh" ? `${review.name} 的更多操作` : lang === "es" ? `Más acciones para ${review.name}` : `More actions for ${review.name}`}>
          <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="5" r="1.6" fill="currentColor" />
            <circle cx="12" cy="12" r="1.6" fill="currentColor" />
            <circle cx="12" cy="19" r="1.6" fill="currentColor" />
          </svg>
        </button>
      </div>
      <div className="g-starline">
        <StarRow value={review.stars} size={14} empty="#dadce0" />
        <span className="sr-only">
          {review.stars} {lang === "zh" ? "星" : lang === "es" ? "estrellas" : "stars"}
        </span>
        <span className="g-when">{localizeWhen(review.when, lang)}</span>
      </div>
      {review.label && <p className="g-label">{lang === "en" ? review.label : labels[review.label]?.[lang] ?? review.label}</p>}
      {review.text && (
        <p className="g-body">
          {reviewIn(lang, review.text)}
          {review.more && (
            <>
              {" ... "}
              <a className="g-more" href={googleReviewsUrl}>
                {moreBtn}
              </a>
            </>
          )}
        </p>
      )}
      <div className="g-react">
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 21s-6.7-4.35-9.33-8.17C.7 10.2 1.2 6.7 4.05 5.4 6.2 4.4 8.4 5.1 12 8.2c3.6-3.1 5.8-3.8 7.95-2.8 2.85 1.3 3.35 4.8 1.38 7.43C18.7 16.65 12 21 12 21z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          />
        </svg>
        {review.likes != null && (
          <span>
            <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" className="inline">
              <path
                d="M12 21s-6.7-4.35-9.33-8.17C.7 10.2 1.2 6.7 4.05 5.4 6.2 4.4 8.4 5.1 12 8.2c3.6-3.1 5.8-3.8 7.95-2.8 2.85 1.3 3.35 4.8 1.38 7.43C18.7 16.65 12 21 12 21z"
                fill="#ea4335"
              />
            </svg>{" "}
            {review.likes}
          </span>
        )}
      </div>
      {review.reply && (
        <div className="g-reply">
          <div className="g-reply-top">
            <span className="g-owner-av" aria-hidden="true">
              A
            </span>
            <div>
              <p className="g-owner-name">{owner}</p>
              {review.reply.when && <p className="g-owner-time">{localizeWhen(review.reply.when, lang)}</p>}
            </div>
          </div>
          <p>{lang === "en" ? review.reply.text : replyText ?? review.reply.text}</p>
        </div>
      )}
    </article>
  );
}

export function GoogleReviews({ lang = "en", heading = "h1" }: { lang?: Lang; heading?: "h1" | "h2" }) {
  const title =
    lang === "zh" ? "Google 评价摘要" : lang === "es" ? "Resumen de reseñas de Google" : "Google review summary";
  const about =
    lang === "zh"
      ? "关于这份 Google 评价摘要"
      : lang === "es"
        ? "Sobre este resumen de reseñas de Google"
        : "About this Google review summary";
  const rated =
    lang === "zh"
      ? `${googleReviewCount} 条 Google 评价，5 分制 ${googleRating} 分。`
      : lang === "es"
        ? `${googleRating} de 5, a partir de ${googleReviewCount} reseñas de Google.`
        : `Rated ${googleRating} out of 5 from ${googleReviewCount} Google reviews.`;
  const readMore =
    lang === "zh" ? "在 Google 上阅读更多评价" : lang === "es" ? "Ver más reseñas en Google" : "Read more reviews on Google";
  const write =
    lang === "zh" ? "请在 Google 上留下评价" : lang === "es" ? "Deja una reseña en Google" : "Please leave a Google review.";
  const Title = heading;
  return (
    <section className="g-reviews" id="google-reviews" aria-label={title}>
      <div className="g-reviews-inner">
        <div className="g-head">
          <Title>
            <span className="g-title">
              <GoogleMark />
              {title}
            </span>
          </Title>
          <a className="g-info" href={googleReviewsUrl} aria-label={about}>
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="9" fill="none" stroke="#5f6368" strokeWidth="1.4" />
              <circle cx="12" cy="8" r="0.9" fill="#5f6368" />
              <path d="M12 11.2v5.2" stroke="#5f6368" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </a>
        </div>
        <div className="g-sum">
          <div className="g-bars" aria-hidden="true">
            {barFills.map((bar) => (
              <div key={bar.stars} className="g-bar-row">
                <span className="g-bar-n">{bar.stars}</span>
                <span className="g-bar-track">
                  <span className="g-bar-fill" style={{ width: bar.width }} />
                </span>
              </div>
            ))}
          </div>
          <div className="g-score-col">
            <p className="g-score">{googleRating.toFixed(1)}</p>
            <StarRow value={googleRating} size={18} empty="#e8eaed" />
            <p className="g-count">({googleReviewCount})</p>
            <p className="sr-only">{rated}</p>
          </div>
        </div>
        <div className="g-cards">
          {googleReviews.map((review) => (
            <ReviewCard key={`${review.name}-${review.when}`} review={review} lang={lang} />
          ))}
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a className="btn btn-line" href={googleReviewsUrl}>
            <GoogleMark />
            {readMore}
          </a>
          <a className="btn btn-primary" href={googleWriteReviewUrl}>
            <GoogleMark />
            {write}
          </a>
        </div>
      </div>
    </section>
  );
}
