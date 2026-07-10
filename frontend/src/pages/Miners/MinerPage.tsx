import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useWorkers } from "../../hooks/useWorkers";
import { useMiner } from "../../hooks/useMiner";
import PoolHashrateChart from "../../components/dashboard/PoolHashrateChart";


function timeAgo(dateString?: string) {
  if (!dateString) return "-";

  const seconds = Math.floor(
    (Date.now() - new Date(dateString).getTime()) / 1000
  );

  if (seconds < 60) {
    return `${seconds} seconds ago`;
  }

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) {
    return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;
  }

  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    return `${hours} hour${hours === 1 ? "" : "s"} ago`;
  }

  const days = Math.floor(hours / 24);
  return `${days} day${days === 1 ? "" : "s"} ago`;
}

export default function MinerPage() {
  const { wallet } = useParams();
  const { data: workers = [], isLoading } = useWorkers();
  const { data: miner } = useMiner(wallet);
  console.log("MINER:", miner);

  const minerWorkers = useMemo(() => {
    return (workers as any[]).filter(
      (w) => w.wallet === decodeURIComponent(wallet || "")
    );
  }, [workers, wallet]);

  
  

  if (isLoading) {
    return <div className="p-8 text-white">Loading...</div>;
  }

  return (
    <main className="min-h-screen bg-[#050816] pt-24">
      <section className="mx-auto max-w-7xl px-6">

        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

  <h1 className="text-5xl font-bold text-white">
    Miner Dashboard
  </h1>

 

</div>

        <div className="mb-8 rounded-2xl border border-white/10 bg-white/5 p-6">

          <p className="font-mono break-all text-cyan-400">
            {wallet}
          </p>

          <div className="mt-6 rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-5">

  <div className="flex items-center gap-3">
    <span className="text-2xl">⛏️</span>

    <div>
     <h3 className="text-lg font-bold text-cyan-300">
    ⛏️ SOLO Mining
</h3>

<p className="mt-2 text-sm text-gray-300">
    100% block reward to the finder.
</p>

<p className="mt-1 text-sm font-medium text-cyan-400">
    🚀 PPLNS Pool — Coming Soon
</p>

    </div>
  </div>

</div>

          <div className="mt-6 grid grid-cols-2 gap-6 lg:grid-cols-4">

  <div>
    <p className="text-gray-400">Current Hashrate</p>
    <p className="text-3xl font-bold text-cyan-400">
      {((miner?.currentHashrate ?? 0) / 1e12).toFixed(2)} TH/s
    </p>
  </div>

  <div>
    <p className="text-gray-400">Average Hashrate</p>
    <p className="text-3xl font-bold">
      {((miner?.averageHashrate ?? 0) / 1e12).toFixed(2)} TH/s
    </p>
  </div>

  <div>
    <p className="text-gray-400">Workers Online</p>
    <p className="text-3xl font-bold">
      {miner?.workersOnline ?? 0}
    </p>
  </div>

  <div>
    <p className="text-gray-400">Last Share</p>

<p className="text-xl font-semibold">
  {miner?.lastSeen
    ? new Date(miner.lastSeen).toLocaleDateString("bg-BG", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
    : "-"}
</p>

<p className="text-sm text-gray-400">
  {miner?.lastSeen
    ? new Date(miner.lastSeen).toLocaleTimeString("bg-BG", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
    : ""}
</p>


  </div>

</div>

</div>

<div className="mb-8 grid grid-cols-2 gap-6 lg:grid-cols-4">

  <div className="rounded-xl border border-white/10 bg-white/5 p-5">
    <p className="text-gray-400">Personal Luck</p>
    <p className="mt-2 text-3xl font-bold text-cyan-400">
      {(miner?.personalLuck ?? 0).toFixed(2)}%
    </p>
  </div>

  <div className="rounded-xl border border-white/10 bg-white/5 p-5">
    <p className="text-gray-400">Last Block</p>
    <p className="mt-2 text-2xl font-bold">
      {miner?.lastBlock || "N/A"}
    </p>
  </div>

  <div className="rounded-xl border border-white/10 bg-white/5 p-5">
    <p className="text-gray-400">Blocks 24h</p>
    <p className="mt-2 text-3xl font-bold">
      {miner?.blocks24h ?? 0}
    </p>
  </div>

  <div className="rounded-xl border border-white/10 bg-white/5 p-5">
    <p className="text-gray-400">Total Blocks</p>
    <p className="mt-2 text-3xl font-bold">
      {miner?.totalBlocks ?? 0}
    </p>
  </div>

</div>

<section className="mb-8">
  <PoolHashrateChart
    title="Miner Hashrate History"
    endpoint={`/api/v1/history/miner?wallet=${encodeURIComponent(
      wallet || ""
    )}`}
  />
</section>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">

          <table className="w-full">

            <thead className="border-b border-white/10">
              <tr>
                <th className="p-5 text-left">Worker</th>
                <th className="p-5 text-left">Hashrate</th>
                <th className="p-5 text-left">
  Accepted Shares
</th>
                <th className="p-5 text-left">Last Seen</th>
                <th className="p-5 text-left">Status</th>
              </tr>
            </thead>

            <tbody>

              {minerWorkers.map((worker: any) => (

                <tr
                  key={worker.name}
                  className="border-b border-white/5"
                >
                  <td className="p-5 font-semibold">
                    {worker.name}
                  </td>

                  <td className="p-5">
                    {(worker.hashrate / 1e12).toFixed(2)} TH/s
                  </td>

                  <td className="p-5">
                    {worker.shares}
                  </td>

                  <td className="p-5">
  {timeAgo(worker.lastSeen)}
</td>

                  <td className="p-5">
                    <span
  className={`inline-flex items-center gap-2 rounded-full px-3 py-1 font-medium ${
    worker.status === "Online"
      ? "bg-green-500/20 text-green-400"
      : "bg-red-500/20 text-red-400"
  }`}
>
  <span
    className={`h-2.5 w-2.5 rounded-full ${
      worker.status === "Online"
        ? "bg-green-400 animate-pulse"
        : "bg-red-400"
    }`}
  />
  {worker.status}
</span>
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </section>
    </main>
  );
}