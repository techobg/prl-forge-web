import { useStats } from "../../hooks/useStats";
import StatCard from "../ui/StatCard";
import { formatHashrate } from "../../utils/hashrate";

import {
  Zap,
  Users,
  Monitor,
  Blocks,
  Target,
  Clover,
} from "lucide-react";

export default function StatsOverview() {
  const { data, isLoading } = useStats();

  if (isLoading) {
    return (
      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <div className="text-xl">Loading...</div>
      </section>
    );
  }

  if (!data) return null;

  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      <StatCard
        icon={<Zap size={22} />}
        title="Pool Hashrate"
        value={formatHashrate(Number(data.poolHashrate))}
      />

      <StatCard
        icon={<Users size={22} />}
        title="Active Miners"
        value={data.miners.toString()}
      />

      <StatCard
        icon={<Monitor size={22} />}
        title="Workers"
        value={data.workers.toString()}
      />

      <StatCard
        icon={<Blocks size={22} />}
        title="Network Height"
        value={data.networkHeight.toString()}
      />

      <StatCard
        icon={<Target size={22} />}
        title="Difficulty"
        value={`${(Number(data.difficulty) / 1_000_000).toFixed(2)}M`}
      />

      <StatCard
        icon={<Clover size={22} />}
        title="Pool Luck"
        value={`${data.poolLuck.toFixed(2)}%`}
      />
    </section>
  );
}