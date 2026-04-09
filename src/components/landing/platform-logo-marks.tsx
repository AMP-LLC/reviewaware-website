import { siGoogle, siHomeadvisor, siNextdoor, siTrustpilot, siYelp } from "simple-icons";

function SimpleIconMark({
  path,
  title,
  className,
}: {
  path: string;
  title: string;
  className?: string;
}) {
  return (
    <svg
      role="img"
      aria-label={title}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="currentColor"
    >
      <title>{title}</title>
      <path d={path} />
    </svg>
  );
}

/** Simplified monochrome torch-and-BBB-style mark — not an official logo file. */
function BbbMonogram({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      aria-label="Better Business Bureau"
      viewBox="0 0 88 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>Better Business Bureau</title>
      <rect
        x="1"
        y="2"
        width="86"
        height="20"
        rx="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        opacity={0.88}
      />
      <text
        x="44"
        y="16.5"
        textAnchor="middle"
        fill="currentColor"
        fontSize="11"
        fontWeight={700}
        letterSpacing="0.06em"
        style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
      >
        BBB
      </text>
    </svg>
  );
}

/** Angi does not currently have a simple-icons glyph; use a neutral wordmark chip. */
function AngiWordmark({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      aria-label="Angi"
      viewBox="0 0 88 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>Angi</title>
      <rect
        x="1"
        y="2"
        width="86"
        height="20"
        rx="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        opacity={0.88}
      />
      <text
        x="44"
        y="16.5"
        textAnchor="middle"
        fill="currentColor"
        fontSize="11"
        fontWeight={700}
        letterSpacing="0.04em"
        style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
      >
        ANGI
      </text>
    </svg>
  );
}

const markClass =
  "h-10 w-auto shrink-0 text-zinc-400 opacity-90 transition-opacity hover:opacity-100 md:h-12";

const googleClass = "h-10 w-auto shrink-0 text-zinc-400 opacity-90 transition-opacity hover:opacity-100 md:h-12";

function LogoRow({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <ul
      className="logo-marquee-group flex list-none items-center gap-10 md:gap-16"
      aria-hidden={ariaHidden}
    >
      <li className="flex justify-center">
        <SimpleIconMark path={siGoogle.path} title={siGoogle.title} className={googleClass} />
      </li>
      <li className="flex justify-center">
        <AngiWordmark className="h-10 w-[8.2rem] text-zinc-400 opacity-90 md:h-12 md:w-[9.8rem]" />
      </li>
      <li className="flex justify-center">
        <SimpleIconMark
          path={siTrustpilot.path}
          title={siTrustpilot.title}
          className="h-[100px] w-auto shrink-0 text-zinc-400 opacity-90 transition-opacity hover:opacity-100 md:h-[120px]"
        />
      </li>
      <li className="flex justify-center">
        <SimpleIconMark
          path={siNextdoor.path}
          title={siNextdoor.title}
          className="h-[3.75rem] w-auto shrink-0 text-zinc-400 opacity-90 transition-opacity hover:opacity-100 md:h-[4.5rem]"
        />
      </li>
      <li className="flex justify-center">
        <SimpleIconMark path={siYelp.path} title={siYelp.title} className={markClass} />
      </li>
      <li className="flex justify-center">
        <BbbMonogram className="h-10 w-[8.2rem] text-zinc-400 opacity-90 md:h-12 md:w-[9.8rem]" />
      </li>
      <li className="flex justify-center">
        <SimpleIconMark path={siHomeadvisor.path} title={siHomeadvisor.title} className={markClass} />
      </li>
    </ul>
  );
}

const stripMarkClass =
  "h-8 w-auto shrink-0 text-zinc-500 opacity-80 transition-opacity hover:opacity-100";

/** Single centered row; logos normalized to h-8 for strip layouts. */
export function PlatformLogoStrip() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-10">
      <SimpleIconMark path={siGoogle.path} title={siGoogle.title} className={stripMarkClass} />
      <AngiWordmark className="h-8 w-[6.75rem] shrink-0 text-zinc-500 opacity-80 transition-opacity hover:opacity-100" />
      <SimpleIconMark path={siTrustpilot.path} title={siTrustpilot.title} className={stripMarkClass} />
      <SimpleIconMark
        path={siNextdoor.path}
        title={siNextdoor.title}
        className="h-14 w-auto shrink-0 text-zinc-500 opacity-80 transition-opacity hover:opacity-100"
      />
      <SimpleIconMark path={siYelp.path} title={siYelp.title} className={stripMarkClass} />
      <BbbMonogram className="h-8 w-[6.75rem] shrink-0 text-zinc-500 opacity-80 transition-opacity hover:opacity-100" />
      <SimpleIconMark path={siHomeadvisor.path} title={siHomeadvisor.title} className={stripMarkClass} />
    </div>
  );
}

export function PlatformLogoMarks() {
  return (
    <div className="logo-marquee">
      <div className="logo-marquee-track">
        <LogoRow />
        <LogoRow ariaHidden />
      </div>
    </div>
  );
}
