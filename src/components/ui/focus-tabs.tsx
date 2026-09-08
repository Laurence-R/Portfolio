"use client";

import Link from "next/link";
import {
  IconBrandGithub,
  IconExternalLink,
} from "@tabler/icons-react";
import { Tabs } from "@/components/ui/tabs";
import type { FocusArea } from "@/types/portfolio";

type FocusTabsProps = {
  items: FocusArea[];
};

const CARD_CLASS =
  "flex h-[26rem] flex-col rounded-2xl border border-slate-200 bg-linear-to-br from-slate-50 to-indigo-50/40 p-6 shadow-sm dark:border-slate-800 dark:from-slate-950 dark:to-indigo-950/30 sm:h-[28rem] sm:p-8";

function FocusPanel({ item }: { item: FocusArea }) {
  const hasLinks = Boolean(item.githubUrl || item.tryNowUrl);

  return (
    <div className="flex h-full flex-col gap-4">
      <div className="min-h-[1.625rem]">
        {item.badge ? (
          <span className="inline-block w-fit rounded-full bg-indigo-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
            {item.badge}
          </span>
        ) : null}
      </div>

      <h3 className="text-lg font-bold leading-snug text-slate-900 dark:text-slate-50 sm:text-xl">
        {item.title}
      </h3>

      <p className="max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
        {item.description}
      </p>

      <div className="min-h-[3.5rem]">
        {item.highlights && item.highlights.length > 0 ? (
          <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
            {item.highlights.map((point) => (
              <li key={point} className="flex gap-2">
                <span className="shrink-0 text-indigo-500 dark:text-indigo-400">
                  •
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <div className="min-h-[1.75rem]">
        {item.tags && item.tags.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-indigo-100 px-2.5 py-0.5 text-[11px] font-medium text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </div>

      <div className="mt-auto min-h-[2.75rem] pt-1">
        {hasLinks ? (
          <div className="flex flex-wrap gap-3">
            {item.tryNowUrl && (
              <Link
                href={item.tryNowUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
              >
                <IconExternalLink size={16} />
                Try Now
              </Link>
            )}
            {item.githubUrl && (
              <Link
                href={item.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                <IconBrandGithub size={16} />
                GitHub
              </Link>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}

function toSlug(title: string, index: number) {
  return (
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "") || `focus-${index}`
  );
}

export function FocusTabs({ items }: FocusTabsProps) {
  const tabs = items.map((item, index) => ({
    title: item.tabLabel ?? item.title.split("—")[0]?.trim() ?? item.title,
    value: toSlug(item.title, index),
    content: (
      <div className={CARD_CLASS}>
        <FocusPanel item={item} />
      </div>
    ),
  }));

  return (
    <Tabs
      tabs={tabs}
      stackEffect={false}
      containerClassName="gap-2"
      tabClassName="text-sm font-medium text-slate-600 dark:text-slate-300"
      activeTabClassName="bg-indigo-600 dark:bg-indigo-600 shadow-md shadow-indigo-500/20"
      contentClassName="min-h-[26rem] sm:min-h-[28rem]"
    />
  );
}
