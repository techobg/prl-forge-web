type Props = {
  title: string;
  value: string;
  subtitle?: string;
};

export default function AnalyticsStatCard({
  title,
  value,
  subtitle,
}: Props) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500 hover:bg-indigo-500/10 hover:shadow-xl hover:shadow-indigo-500/10">

      <p className="text-sm text-gray-400">
        {title}
      </p>

      <h2 className="mt-3 text-3xl font-bold">
        {value}
      </h2>

      {subtitle && (
        <p className="mt-3 text-sm text-green-400">
          {subtitle}
        </p>
      )}

    </div>
  );
}