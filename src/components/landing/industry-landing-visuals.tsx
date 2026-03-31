import { Fragment } from "react";
import { getTranslations } from "next-intl/server";
import {
  ClipboardList,
  ChevronRight,
  CreditCard,
  FileText,
  Mail,
  QrCode,
  Truck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { HeroSectionCopy } from "@/components/landing/hero-section";
import { Link } from "@/i18n/navigation";
import { getLiteTrialHref } from "@/lib/marketing-links";
import { cn } from "@/lib/utils";

const WORKFLOW_ICONS = [ClipboardList, QrCode, Mail] as const;

/** Shared product UI chrome for industry landing mockups */
export const INDUSTRY_MOCK_SURFACE =
  "rounded-xl border border-zinc-700/60 bg-zinc-950 text-zinc-100 shadow-lg shadow-black/45 ring-1 ring-blue-500/25";

const mockKpiCell =
  "rounded-lg border border-zinc-800/90 bg-zinc-900/70 px-2 py-2 sm:px-2.5 sm:py-2.5 text-center";
const mockKpiLabel =
  "mt-1 text-[9px] font-medium uppercase leading-tight tracking-wide text-zinc-500 sm:text-[10px]";
const mockKpiValue =
  "text-sm font-semibold tabular-nums text-zinc-50 sm:text-base";

export type IndustryWorkflowVisualStep = {
  title: string;
  body: string;
};

/** Two-column hero with dashboard mockup (industry landing only). */
export async function IndustryLandingHero({
  locale,
  copy,
  sectionClassName,
}: {
  locale: string;
  copy: HeroSectionCopy;
  sectionClassName?: string;
}) {
  const tHero = await getTranslations("hero");
  const tIndustry = await getTranslations("industryLanding");
  const tDash = await getTranslations("industryLanding.heroDashboard");
  const trialHref = getLiteTrialHref(locale);

  const {
    headlineLine1,
    headlineLine2,
    subtitleLine1,
    subtitleLine2,
    ctaPrimary,
    ctaSecondary,
    credibilityLine,
  } = copy;

  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-zinc-200/60 bg-gradient-to-b from-white to-blue-50 py-12 md:py-16 lg:py-24",
        sectionClassName,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-10 size-80 rounded-full bg-blue-500/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-2 size-72 rounded-full bg-sky-300/20 blur-3xl"
      />
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
          <div className="relative text-center lg:text-left">
            <h1 className="text-balance text-4xl font-semibold leading-[1.15] tracking-tight text-zinc-950 md:text-5xl md:leading-[1.1]">
              <span className="block">{headlineLine1}</span>
              {headlineLine2 ? (
                <span className="mt-1 block sm:mt-1.5">{headlineLine2}</span>
              ) : null}
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-zinc-700 sm:text-xl sm:leading-relaxed lg:mx-0">
              <span className="block">{subtitleLine1}</span>
              {subtitleLine2 ? <span className="block">{subtitleLine2}</span> : null}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start sm:gap-4">
              <Button
                asChild
                size="lg"
                className="h-12 w-full min-w-[220px] px-8 text-base shadow-lg shadow-blue-600/25 transition duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-600/30 sm:w-auto"
              >
                <a href={trialHref}>{ctaPrimary}</a>
              </Button>
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="h-12 w-full min-w-[200px] border border-zinc-300 bg-white/90 px-8 sm:w-auto"
              >
                <a href="#demo">{ctaSecondary}</a>
              </Button>
            </div>
            <p className="mt-4 text-center text-sm text-muted-foreground lg:text-left">
              {tHero("socialProofLine")}
            </p>
            {credibilityLine ? (
              <p className="mx-auto mt-5 max-w-xl text-pretty text-sm font-medium leading-relaxed text-zinc-600 sm:text-base lg:mx-0">
                {credibilityLine}
              </p>
            ) : null}
            <div className="mx-auto mt-6 flex max-w-md flex-wrap justify-center gap-3 lg:mx-0 lg:justify-start sm:max-w-none sm:gap-3.5">
              {(["reassuranceChip1", "reassuranceChip2", "reassuranceChip3"] as const).map(
                (key) => (
                  <span
                    key={key}
                    className="inline-flex items-center rounded-full border border-blue-100 bg-white px-5 py-2.5 text-sm font-semibold text-primary shadow-sm"
                  >
                    {tHero(key)}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="mx-auto w-full max-w-[440px] lg:mx-0 lg:justify-self-end">
            <div className="mb-6 text-center lg:text-left">
              <h3 className="text-lg font-semibold tracking-tight text-zinc-950 sm:text-xl">
                {tIndustry("dashboardIntro.title")}
              </h3>
              <p className="mx-auto mt-2 max-w-md text-pretty text-sm leading-relaxed text-zinc-600 sm:text-base lg:mx-0">
                {tIndustry("dashboardIntro.subtitle")}
              </p>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-blue-100/45 via-indigo-50/35 to-sky-50/30 p-4 ring-1 ring-blue-200/35 sm:p-5">
            <div className={cn(INDUSTRY_MOCK_SURFACE, "p-5 sm:p-6")}>
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                <h2 className="text-sm font-semibold tracking-tight text-zinc-100">
                  {tDash("cardTitle")}
                </h2>
                <span className="rounded-md bg-blue-500/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-blue-300 ring-1 ring-blue-500/30">
                  Live
                </span>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-2">
                <div className={mockKpiCell}>
                  <p className={mockKpiValue}>312</p>
                  <p className={mockKpiLabel}>{tDash("kpiRequestsSent")}</p>
                </div>
                <div className={mockKpiCell}>
                  <p className={mockKpiValue}>124</p>
                  <p className={mockKpiLabel}>{tDash("kpiReviewsCollected")}</p>
                </div>
                <div className={mockKpiCell}>
                  <p className={cn(mockKpiValue, "text-amber-400")}>4.8</p>
                  <p className={mockKpiLabel}>{tDash("kpiAverageRating")}</p>
                </div>
                <div className={mockKpiCell}>
                  <p className={cn(mockKpiValue, "text-blue-300")}>39%</p>
                  <p className={mockKpiLabel}>{tDash("kpiClickRate")}</p>
                </div>
              </div>
              <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-2">
                <div className={mockKpiCell}>
                  <p className={mockKpiValue}>86</p>
                  <p className={mockKpiLabel}>{tDash("kpiQrScans")}</p>
                </div>
                <div className={mockKpiCell}>
                  <p className={mockKpiValue}>9</p>
                  <p className={mockKpiLabel}>{tDash("kpiPrivateFeedback")}</p>
                </div>
                <div className={mockKpiCell}>
                  <p className={mockKpiValue}>71</p>
                  <p className={mockKpiLabel}>{tDash("kpiFiveStarReviews")}</p>
                </div>
                <div className={mockKpiCell}>
                  <p className={mockKpiValue}>23</p>
                  <p className={mockKpiLabel}>{tDash("kpiPendingFollowUps")}</p>
                </div>
              </div>
              <p className="mt-5 text-[11px] font-semibold uppercase tracking-wide text-zinc-500">
                {tDash("activityTitle")}
              </p>
              <div className="mt-2 overflow-hidden rounded-lg border border-zinc-800/80">
                <div className="grid grid-cols-[1fr_auto] gap-2 border-b border-zinc-800/80 bg-zinc-900/80 px-3 py-2 text-[10px] font-semibold uppercase tracking-wide text-zinc-500">
                  <span>{tDash("activityColJob")}</span>
                  <span className="text-right">{tDash("activityColStatus")}</span>
                </div>
                <ul className="divide-y divide-zinc-800/80 text-xs text-zinc-300">
                  {[
                    { job: tDash("row1"), status: tDash("row1Status"), statusTone: "text-emerald-400" },
                    { job: tDash("row2"), status: tDash("row2Status"), statusTone: "text-blue-400" },
                    { job: tDash("row3"), status: tDash("row3Status"), statusTone: "text-zinc-400" },
                    { job: tDash("row4"), status: tDash("row4Status"), statusTone: "text-amber-400" },
                  ].map((row) => (
                    <li
                      key={row.job}
                      className="grid grid-cols-[1fr_auto] gap-2 px-3 py-2.5"
                    >
                      <span className="truncate font-medium text-zinc-200">{row.job}</span>
                      <span className={cn("shrink-0 text-right font-medium", row.statusTone)}>
                        {row.status}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Icon-forward workflow steps with arrows on desktop. */
export function IndustryLandingWorkflowVisual({
  sectionTitle,
  steps,
  sectionClassName,
}: {
  sectionTitle: string;
  steps: readonly IndustryWorkflowVisualStep[];
  sectionClassName?: string;
}) {
  return (
    <section
      id="workflow"
      className={cn(
        "border-b border-zinc-200/60 bg-white py-12 md:py-16 lg:py-24",
        sectionClassName,
      )}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div id="demo" aria-hidden />
        <h2 className="mx-auto max-w-3xl text-balance text-center text-[1.875rem] font-semibold leading-tight tracking-tight text-zinc-950 sm:text-4xl lg:text-[2.625rem]">
          {sectionTitle}
        </h2>
        <div className="mt-12 flex flex-col gap-8 md:mt-14 md:flex-row md:items-stretch md:justify-center md:gap-2 lg:gap-4">
          {steps.map((step, index) => {
            const Icon = WORKFLOW_ICONS[index] ?? ClipboardList;
            return (
              <Fragment key={step.title}>
                {index > 0 ? (
                  <div
                    className="hidden shrink-0 items-center self-center md:flex"
                    aria-hidden
                  >
                    <ChevronRight className="size-8 text-zinc-300" strokeWidth={1.5} />
                  </div>
                ) : null}
                <Card className="h-full min-w-0 flex-1 rounded-xl border border-zinc-200/90 bg-white shadow-md transition-shadow hover:shadow-lg md:max-w-[340px] lg:max-w-none">
                  <CardContent className="flex h-full flex-col p-6 sm:p-8">
                    <div className="flex size-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                      <Icon className="size-7" aria-hidden />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold tracking-tight text-zinc-950">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-pretty text-sm leading-relaxed text-zinc-600 sm:text-base">
                      {step.body}
                    </p>
                  </CardContent>
                </Card>
              </Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export type WorkflowScreenMockLabels = {
  jobsTitle: string;
  job1: string;
  job2: string;
  job3: string;
  detailTitle: string;
  customerLabel: string;
  customerValue: string;
  serviceLabel: string;
  serviceValue: string;
  completedLabel: string;
  completedValue: string;
  qrCardTitle: string;
  qrUrl: string;
  copyHint: string;
  timelineTitle: string;
  timeline1: string;
  timeline2: string;
  timeline3: string;
};

/** Job → review workflow screen mock (simplified product UI). */
export function IndustryWorkflowJobScreenVisual({
  labels,
  sectionClassName,
}: {
  labels: WorkflowScreenMockLabels;
  sectionClassName?: string;
}) {
  const jobs: { id: string; text: string; selected?: boolean }[] = [
    { id: "1", text: labels.job1 },
    { id: "2", text: labels.job2, selected: true },
    { id: "3", text: labels.job3 },
  ];

  return (
    <section
      className={cn(
        "border-b border-zinc-200/60 bg-gradient-to-b from-zinc-100/35 to-white py-12 md:py-16 lg:py-24",
        sectionClassName,
      )}
      aria-label={labels.detailTitle}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className={cn(INDUSTRY_MOCK_SURFACE, "mx-auto max-w-4xl p-5 sm:p-6")}>
          <div className="grid gap-6 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-4">
              <p className="text-[10px] font-semibold uppercase tracking-wide text-zinc-500">
                {labels.jobsTitle}
              </p>
              <ul className="mt-3 space-y-2">
                {jobs.map((job) => (
                  <li
                    key={job.id}
                    className={cn(
                      "rounded-lg border px-3 py-2.5 text-xs font-medium transition-colors",
                      job.selected
                        ? "border-blue-500/50 bg-blue-500/10 text-zinc-50 ring-1 ring-blue-500/35"
                        : "border-zinc-800/80 bg-zinc-900/40 text-zinc-400 hover:border-zinc-700 hover:text-zinc-300",
                    )}
                  >
                    {job.text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4 md:col-span-8">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wide text-blue-400/90">
                  {labels.detailTitle}
                </p>
                <dl className="mt-3 grid gap-2 text-xs sm:grid-cols-2">
                  <div className="rounded-lg border border-zinc-800/80 bg-zinc-900/50 px-3 py-2">
                    <dt className="text-zinc-500">{labels.customerLabel}</dt>
                    <dd className="mt-0.5 font-medium text-zinc-100">{labels.customerValue}</dd>
                  </div>
                  <div className="rounded-lg border border-zinc-800/80 bg-zinc-900/50 px-3 py-2">
                    <dt className="text-zinc-500">{labels.serviceLabel}</dt>
                    <dd className="mt-0.5 font-medium text-zinc-100">{labels.serviceValue}</dd>
                  </div>
                  <div className="rounded-lg border border-zinc-800/80 bg-zinc-900/50 px-3 py-2 sm:col-span-2">
                    <dt className="text-zinc-500">{labels.completedLabel}</dt>
                    <dd className="mt-0.5 font-medium text-zinc-100">{labels.completedValue}</dd>
                  </div>
                </dl>
              </div>
              <div className="rounded-lg border border-blue-500/25 bg-blue-500/5 px-4 py-3 ring-1 ring-blue-500/15">
                <p className="text-[10px] font-semibold uppercase tracking-wide text-blue-300/90">
                  {labels.qrCardTitle}
                </p>
                <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
                  <p className="font-mono text-[11px] text-blue-100/95">{labels.qrUrl}</p>
                  <span className="shrink-0 text-[10px] font-medium text-blue-400/90">
                    {labels.copyHint}
                  </span>
                </div>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wide text-zinc-500">
                  {labels.timelineTitle}
                </p>
                <ol className="relative mt-3 space-y-0 border-l border-zinc-700 pl-4">
                  {[labels.timeline1, labels.timeline2, labels.timeline3].map((step, i, arr) => (
                    <li key={step} className="relative pb-4 last:pb-0">
                      <span
                        className="absolute -left-[21px] top-1 size-2.5 rounded-full bg-blue-500 ring-4 ring-zinc-950"
                        aria-hidden
                      />
                      <span
                        className={cn(
                          "text-xs font-medium",
                          i === arr.length - 1 ? "text-emerald-400" : "text-zinc-300",
                        )}
                      >
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export type QrToolkitMockLabels = {
  panelTitle: string;
  panelSubtitle: string;
  statScansLabel: string;
  statClicksLabel: string;
  statReviewsLabel: string;
  tileQrCards: string;
  tileLeaveBehind: string;
  tileInvoice: string;
  tileVehicle: string;
};

const TOOLKIT_TILE_ICONS = [QrCode, CreditCard, FileText, Truck] as const;

/** QR toolkit / review assets preview card. */
export function IndustryQrToolkitVisual({ labels }: { labels: QrToolkitMockLabels }) {
  const tiles = [
    { label: labels.tileQrCards, Icon: TOOLKIT_TILE_ICONS[0] },
    { label: labels.tileLeaveBehind, Icon: TOOLKIT_TILE_ICONS[1] },
    { label: labels.tileInvoice, Icon: TOOLKIT_TILE_ICONS[2] },
    { label: labels.tileVehicle, Icon: TOOLKIT_TILE_ICONS[3] },
  ] as const;

  return (
    <div className={cn(INDUSTRY_MOCK_SURFACE, "mx-auto max-w-5xl p-5 sm:p-6")}>
      <div className="border-b border-zinc-800 pb-4">
        <h3 className="text-base font-semibold tracking-tight text-zinc-50">{labels.panelTitle}</h3>
        <p className="mt-1 text-xs text-zinc-500">{labels.panelSubtitle}</p>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
        {tiles.map(({ label, Icon }) => (
          <div
            key={label}
            className="rounded-lg border border-zinc-800/90 bg-zinc-900/60 px-3 py-4 text-center ring-1 ring-zinc-800/50"
          >
            <div className="mx-auto flex size-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/20">
              <Icon className="size-5" aria-hidden />
            </div>
            <p className="mt-2 text-[11px] font-semibold leading-snug text-zinc-200">{label}</p>
            <div className="mx-auto mt-3 h-8 max-w-[72px] rounded border border-dashed border-zinc-700 bg-zinc-950/80" />
          </div>
        ))}
      </div>
      <div className="mt-5 grid grid-cols-3 gap-3 border-t border-zinc-800 pt-4">
        {[
          { v: "86", label: labels.statScansLabel },
          { v: "124", label: labels.statClicksLabel },
          { v: "71", label: labels.statReviewsLabel },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-lg font-semibold tabular-nums text-blue-200 sm:text-xl">{stat.v}</p>
            <p className="mt-0.5 text-[10px] font-medium uppercase tracking-wide text-zinc-500">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function IndustryQrCardMockup({
  starsLabel,
  headline,
  subline,
  scanHint,
  sectionClassName,
}: {
  starsLabel: string;
  headline: string;
  subline: string;
  scanHint: string;
  sectionClassName?: string;
}) {
  return (
    <section
      className={cn(
        "border-b border-zinc-200/60 bg-gradient-to-b from-zinc-50/80 to-white py-12 md:py-16 lg:py-24",
        sectionClassName,
      )}
      aria-label={headline}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-[260px] rounded-lg border border-zinc-200 bg-white p-6 text-center shadow-sm">
          <p className="text-lg tracking-tight text-amber-500" aria-hidden>
            {starsLabel}
          </p>
          <p className="mt-3 text-base font-semibold text-zinc-950">{headline}</p>
          <p className="mt-1 text-xs leading-relaxed text-zinc-600">{subline}</p>
          <div
            className="mx-auto mt-5 grid size-[120px] place-items-center rounded-md border-2 border-dashed border-zinc-300 bg-zinc-50"
            role="img"
            aria-label={scanHint}
          >
            <QrCode className="size-12 text-zinc-300" strokeWidth={1.25} aria-hidden />
          </div>
          <p className="mt-3 text-[11px] font-medium uppercase tracking-wide text-zinc-500">
            {scanHint}
          </p>
        </div>
      </div>
    </section>
  );
}

const pillClass =
  "inline-flex items-center rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-800 shadow-sm transition hover:border-blue-200 hover:bg-blue-50/50 hover:text-blue-900";

export function IndustryProductProofSection({
  title,
  badges,
  sectionClassName,
}: {
  title: string;
  badges: readonly { id: string; label: string; href?: string }[];
  sectionClassName?: string;
}) {
  return (
    <section
      className={cn(
        "border-b border-zinc-200/60 bg-white py-12 md:py-16 lg:py-24",
        sectionClassName,
      )}
    >
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-balance text-[1.375rem] font-semibold leading-tight tracking-tight text-zinc-950 sm:text-2xl">
          {title}
        </h2>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {badges.map(({ id, label, href }) =>
            href ? (
              <Link key={id} href={href} className={cn(pillClass, "no-underline")}>
                {label}
              </Link>
            ) : (
              <span key={id} className={cn(pillClass, "cursor-default text-zinc-500")}>
                {label}
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
