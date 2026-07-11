import type { ReactNode } from "react";

type StatCardProps = {
  icon?: ReactNode;
  title: string;
  value: string;
  change?: string;
  positive?: boolean;
};

export default function StatCard({
  icon,
  title,
  value,
  change,
  positive = true,
}: StatCardProps) {
  return (
    <div className="group rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500 hover:shadow-[0_0_30px_rgba(99,102,241,.20)]">

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-2.5">

          {icon && (
            <div className="rounded-lg bg-indigo-500/15 p-2.5 text-indigo-400 transition group-hover:scale-105">
              {icon}
            </div>
          )}

          <p className="text-xs uppercase tracking-[0.15em] text-gray-400">
            {title}
          </p>

        </div>

        {change && (
          <span
            className={`text-xs font-semibold ${
              positive ? "text-green-400" : "text-red-400"
            }`}
          >
            {change}
          </span>
        )}

      </div>

      <h2 className="mt-4 text-3xl font-bold">
        {value}
      </h2>

    </div>
  );
}