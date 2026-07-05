import {
  Activity,
  Blocks,
  Cpu,
  Gauge,
} from "lucide-react";

import { useDashboard } from "../../hooks/useDashboard";

function formatHashrate(hs?: number) {
  if (!hs) {
    return "--";
  }

  const units = [
  "H/s",
  "KH/s",
  "MH/s",
  "GH/s",
  "TH/s",
  "PH/s",
  "EH/s",
];

  let value = hs;
  let unit = 0;

  while (value >= 1000 && unit < units.length - 1) {
    value /= 1000;
    unit++;
  }

  return `${value.toFixed(2)} ${units[unit]}`;

}

function formatDifficulty(diff: number) {
  if (diff >= 1_000_000) {
    return `${(diff / 1_000_000).toFixed(2)} M`;
  }

  if (diff >= 1000) {
    return `${(diff / 1000).toFixed(2)} K`;
  }

  return diff.toString();
}

export default function NetworkOverview() {
  const { data, isLoading } = useDashboard();

  if (isLoading || !data) {
    return null;
  }

  const network = [
    {
      title: "Network Height",
      value: data.network.height,
      icon: <Blocks size={28} />,
    },
    {
      title: "Difficulty",
      value: formatDifficulty(data.network.difficulty),
      icon: <Activity size={28} />,
    },
    {
      title: "Pool Hashrate",
value: formatHashrate(data.network.poolHashrate),
      icon: <Gauge size={28} />,
    },
    {
      title: "Pool Fee",
      value: "1.5%",
      icon: <Cpu size={28} />,
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="mb-8 text-4xl font-bold">
        Network Overview
      </h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {network.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:border-indigo-500 hover:shadow-[0_0_35px_rgba(99,102,241,.25)]"
          >
            <div className="mb-6 text-indigo-400">
              {item.icon}
            </div>

            <p className="text-gray-400">
              {item.title}
            </p>

            <h3 className="mt-3 text-4xl font-bold">
              {item.value}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}