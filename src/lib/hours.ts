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

export function studioStatus(open: string, close: string, lang: Lang, now = new Date()) {
  const current = minutesInNewYork(now);
  const isOpen = current >= toMinutes(open) && current < toMinutes(close);
  return {
    isOpen,
    label: isOpen ? ui.openNow[lang] : ui.closedNow[lang],
  };
}
