import type { ReactNode } from "react";

type StatCardProps = {
  icon: ReactNode;
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
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500 hover:shadow-[0_0_40px_rgba(99,102,241,.25)]">

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="rounded-xl bg-indigo-500/15 p-3 text-indigo-400 transition group-hover:scale-110">
            {icon}
          </div>

          <p className="text-sm uppercase tracking-wider text-gray-400">
            {title}
          </p>

        </div>

        {change && (
          <span
            className={`text-sm font-semibold ${
              positive ? "text-green-400" : "text-red-400"
            }`}
          >
            {change}
          </span>
        )}

      </div>

      <h2 className="mt-6 text-4xl font-bold">
        {value}
      </h2>

    </div>
  );
}