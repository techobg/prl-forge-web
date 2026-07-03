import { ReactNode } from "react";

interface InfoCardProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}

export default function InfoCard({
  title,
  icon,
  children,
}: InfoCardProps) {
  return (
    <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/40 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]">

      <div className="mb-8 flex items-center gap-3">

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-xl">
          {icon}
        </div>

        <h2 className="text-xl font-bold text-white">
          {title}
        </h2>

      </div>

      {children}

    </div>
  );
}