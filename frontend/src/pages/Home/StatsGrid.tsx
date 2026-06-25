import { useStats } from "../../hooks/useStats";
import StatCard from "../../components/ui/StatCard";

export default function StatsGrid() {
  const { data, isLoading } = useStats();

  if (isLoading) {
    return (
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <h2 className="text-2xl font-bold">Loading...</h2>
      </section>
    );
  }

  if (!data) return null;

  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

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

      </div>

    </section>
  );
}