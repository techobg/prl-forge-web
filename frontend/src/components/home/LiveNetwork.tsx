import { useDashboard } from "../../hooks/useDashboard";
import { formatHashrate } from "../../utils/hashrate";

export default function LiveNetwork() {

const { data, isLoading } = useDashboard();

if (isLoading || !data) {
  return null;
}

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">

      <div className="mb-10 text-center">

        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2">

          <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />

          <span className="text-sm font-medium text-green-300">
            LIVE NETWORK
          </span>

        </div>

        <h2 className="text-4xl font-bold">
          Pearl Network Status
        </h2>

        <p className="mt-4 text-gray-400">
          Real-time statistics from PRL Forge.
        </p>

      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm text-gray-400">
            Network Height
          </p>

          <h3 className="mt-3 text-3xl font-bold text-indigo-400">
            {data.network.height}
          </h3>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
 <p className="text-sm text-gray-400">
  Pool Hashrate
</p>

<h3 className="mt-3 text-3xl font-bold text-indigo-400">
  {formatHashrate(Number(data.network.hashrate))}
</h3>
</div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm text-gray-400">
            Workers Online
          </p>

          <h3 className="mt-3 text-3xl font-bold text-indigo-400">
            {data.workers.online}
          </h3>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm text-gray-400">
            Pool Status
          </p>

          <h3 className="mt-3 text-3xl font-bold text-green-400">
            {data.pool.status.toUpperCase()}
          </h3>
        </div>

      </div>

    </section>
  );
}