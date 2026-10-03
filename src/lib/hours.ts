import type { Lang } from "@/content/site";
import { ui } from "@/content/site";

function minutesInNewYork(date: Date): number {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? "0");
  const minute = Number(parts.find((p) => p.type === "minute")?.value ?? "0");
  return hour * 60 + minute;
}

function toMinutes(hhmm: string): number {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
}

function formatClock(hhmm: string, lang: Lang): string {
  const [hRaw, mRaw] = hhmm.split(":").map(Number);
  const hour12 = hRaw % 12 || 12;
  const minute = String(mRaw).padStart(2, "0");
  const afternoon = hRaw >= 12;
  if (lang === "zh") return `${afternoon ? "晚上" : "上午"} ${hour12}:${minute}`;
  const suffix = lang === "es" ? (afternoon ? "p. m." : "a. m.") : afternoon ? "p.m." : "a.m.";
  return `${hour12}:${minute} ${suffix}`;
}

export function studioStatus(open: string, close: string, lang: Lang, now = new Date()) {
  const current = minutesInNewYork(now);
  const isOpen = current >= toMinutes(open) && current < toMinutes(close);
  return {
    isOpen,
    label: isOpen ? ui.openNow[lang] : ui.closedNow[lang],
    when: isOpen ? ui.closesAt[lang] : ui.opensAt[lang],
    time: formatClock(isOpen ? close : open, lang),
  };
}
