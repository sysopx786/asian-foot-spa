import type { ReactNode } from "react";

export function PhoneDisc() {
  return (
    <svg className="mark-phone" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#34A853" />
      <path
        fill="#fff"
        d="M16.7 14.2c-.3-.3-1.6-.8-1.8-.9-.3-.1-.4-.1-.6.2-.2.3-.7.9-.8 1-.2.2-.3.2-.6.1-1.4-.7-2.4-1.5-3.1-2.9-.1-.2 0-.4.1-.5.1-.1.3-.3.4-.5.1-.2.1-.3.2-.5 0-.2 0-.4-.1-.5-.1-.1-.6-1.5-.9-2.1-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.4-.3.3-1 1-1 2.3s1.1 2.7 1.2 2.9c.1.2 2 3 4.7 4.1 1.7.7 2.1.7 2.9.6.5-.1 1.6-.7 1.8-1.3.2-.6.2-1.1.1-1.3-.1-.2-.3-.3-.6-.5z"
      />
    </svg>
  );
}

export function MapsPin() {
  return (
    <svg className="mark-pin" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <path fill="#EA4335" d="M12 2.2C8.3 2.2 5.2 5.2 5.2 8.9c0 4.9 6.8 12.9 6.8 12.9s6.8-8 6.8-12.9c0-3.7-3.1-6.7-6.8-6.7z" />
      <circle cx="12" cy="8.8" r="2.3" fill="#fff" />
    </svg>
  );
}

export function GoogleMark() {
  return (
    <svg className="mark-google" viewBox="0 0 48 48" width="18" height="18" aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 8 3.1l5.7-5.7C34.2 6.1 29.4 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.5z" />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16 19 12 24 12c3.1 0 5.8 1.2 8 3.1l5.7-5.7C34.2 6.1 29.4 4 24 4 16.3 4 9.6 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 10-2 13.6-5.2l-6.3-5.3C29.3 35.1 26.8 36 24 36c-5.3 0-9.7-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-1.1 3.2-3.5 5.7-6.6 7.1l6.3 5.3C37.4 38.3 44 33 44 24c0-1.3-.1-2.7-.4-3.5z" />
    </svg>
  );
}

export function ClockMark() {
  return (
    <svg className="mark-clock" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <circle cx="12" cy="12" r="8.2" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M12 7.6V12l3 2" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export function MailMark() {
  return (
    <svg className="mark-mail" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <rect x="3.2" y="5.2" width="17.6" height="13.6" rx="1.6" fill="none" stroke="#1a73e8" strokeWidth="1.7" />
      <path d="M4 7l8 6 8-6" fill="none" stroke="#1a73e8" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  );
}

export function CashMark() {
  return (
    <svg className="mark-cash" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <rect x="2.5" y="6" width="19" height="12" rx="1.5" fill="none" stroke="#188038" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="2.3" fill="none" stroke="#188038" strokeWidth="1.6" />
      <path d="M6 9.2v.01M18 14.8v.01" stroke="#188038" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function CardMark() {
  return (
    <svg className="mark-card" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <rect x="2.5" y="5.2" width="19" height="13.6" rx="1.6" fill="none" stroke="#1a73e8" strokeWidth="1.6" />
      <path d="M2.5 9.4h19" stroke="#1a73e8" strokeWidth="1.6" />
      <path d="M6 14.2h4" stroke="#1a73e8" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function WheelchairMark() {
  return (
    <svg className="mark-access" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <circle cx="12.2" cy="4.6" r="1.7" fill="#1a73e8" />
      <path
        d="M8.2 8.4h4.2l1.4 3.2M10.2 11.2 8.6 16M13.8 11.6h3.2M9.2 20.2a4.2 4.2 0 1 1 0-8.4 4.2 4.2 0 0 1 0 8.4z"
        fill="none"
        stroke="#1a73e8"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Marked({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <span className="marked">
      {icon}
      <span>{children}</span>
    </span>
  );
}
