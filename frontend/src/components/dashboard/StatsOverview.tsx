import { useStats } from "../../hooks/useStats";
import StatCard from "../ui/StatCard";

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
        title="Pool Hashrate"
        value={data.poolHashrate}
      />

      <StatCard
        title="Active Miners"
        value={data.miners.toString()}
      />

      <StatCard
        title="Workers"
        value={data.workers.toString()}
      />

      <StatCard
        title="Network Height"
        value={data.networkHeight.toString()}
      />

      <StatCard
        title="Difficulty"
        value={data.difficulty}
      />

      <StatCard
        title="Pool Luck"
        value={`${data.poolLuck}%`}
      />

    </section>
  );
}