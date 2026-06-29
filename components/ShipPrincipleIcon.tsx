import type { BuildPrincipleIconId } from "@/lib/site-content";

const common = "h-6 w-6 shrink-0 text-[var(--on-light-accent)]" as const;

type Props = { id: BuildPrincipleIconId; className?: string };

export default function ShipPrincipleIcon({ id, className = "" }: Props) {
  const cls = `${common} ${className}`.trim();

  switch (id) {
    case "performance":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M4 20V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M4 20h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path
            d="M7 17v-5m5 5V9m5 8V6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "cms":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect
            x="3"
            y="3"
            width="8"
            height="8"
            rx="1.5"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <rect
            x="13"
            y="3"
            width="8"
            height="5"
            rx="1.5"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <rect
            x="13"
            y="10"
            width="8"
            height="11"
            rx="1.5"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M5.5 6h3M5.5 9h3"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "motion":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M4 14c2.5-4 5-4 8 0s5.5 4 8 0"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M4 10c2.5-3.5 5-3.5 8 0s5.5 3.5 8 0"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.65"
          />
          <path
            d="M4 18c2.5-3.5 5-3.5 8 0s5.5 3.5 8 0"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.45"
          />
        </svg>
      );
    case "handover":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M9 5h6a2 2 0 012 2v14a1 1 0 01-1 1H8a1 1 0 01-1-1V7a2 2 0 012-2z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M9 5V4a1 1 0 011-1h4a1 1 0 011 1v1"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M9.5 12.5l2 2 3.5-3.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 16h6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.5"
          />
        </svg>
      );
    case "ai":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 4.5c-2.8 0-5 2.2-5 5 0 1.9 1.1 3.6 2.7 4.4-.4.8-.7 1.7-.7 2.6 0 .6.5 1.1 1.1 1.1.7 0 1.3-.2 1.9-.5.6.3 1.2.5 1.9.5.6 0 1.1-.5 1.1-1.1 0-.9-.3-1.8-.7-2.6 1.6-.8 2.7-2.5 2.7-4.4 0-2.8-2.2-5-5-5z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M8.5 18.5c.8.6 1.8 1 3 1s2.2-.4 3-1"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M9 9.5h.01M12 9.5h.01M15 9.5h.01"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    default:
      return null;
  }
}
