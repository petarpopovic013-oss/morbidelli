import type { ReactNode } from "react";

type InnerPageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  summary?: ReactNode;
};

export default function InnerPageHero({
  eyebrow,
  title,
  description,
  summary,
}: InnerPageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-black/10 bg-white px-4 py-16 md:px-6 md:py-24 lg:px-12 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 -top-28 h-[420px] w-[420px] rounded-full border-[80px] border-black/[0.025] md:h-[620px] md:w-[620px] md:border-[110px]"
      />
      <div className="relative mx-auto max-w-[1440px]">
        <div className="mb-7 h-1 w-20 -skew-x-[45deg] bg-track-cyan md:w-28" />
        <p className="mb-4 font-replica text-xs font-bold uppercase tracking-[0.24em] text-gray-500">
          {eyebrow}
        </p>
        <h1 className="max-w-5xl break-words font-replica text-[36px] font-bold leading-[1.02] tracking-[-0.035em] text-black sm:text-5xl md:text-7xl lg:text-[82px]">
          {title}
        </h1>
        <div className="mt-8 flex max-w-4xl flex-col gap-8 border-t border-black/10 pt-7 md:flex-row md:items-end md:justify-between">
          <p className="max-w-2xl font-replica-light text-base leading-relaxed text-gray-600 md:text-lg">
            {description}
          </p>
          {summary && <div className="shrink-0">{summary}</div>}
        </div>
      </div>
    </section>
  );
}
