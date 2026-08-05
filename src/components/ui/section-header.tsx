import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
};

export function SectionHeader({
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-8 md:mb-12",
        align === "center" && "text-center",
        align === "right" && "text-right",
        className
      )}
    >
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 max-w-md text-sm text-slate-600 dark:text-neutral-300 md:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}
