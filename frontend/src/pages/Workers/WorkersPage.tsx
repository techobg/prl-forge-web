import { Link } from "react-router-dom";
import { useWorkers } from "../../hooks/useWorkers";

export default function WorkersPage() {
  const { data: workers = [], isLoading } = useWorkers();

  if (isLoading) {
    return <div className="p-8 text-white">Loading...</div>;
  }

  const miners = Object.values(
    (workers as any[]).reduce((acc: any, worker: any) => {
      const wallet = worker.wallet || "Unknown";

      if (!acc[wallet]) {
        acc[wallet] = {
          wallet,
          hashrate: 0,
          workers: 0,
          status: "Online",
        };
      }

      acc[wallet].workers += 1;
      acc[wallet].hashrate += Number(worker.hashrate || 0);

      if (worker.status) {
    acc[wallet].status = worker.status;
}

      return acc;
    }, {})
  );

  return (
    <main className="min-h-screen bg-[#050816] pt-24">
      <section className="mx-auto max-w-7xl px-6">
        <h1 className="mb-8 text-5xl font-bold text-white">
          Miners
        </h1>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          <table className="w-full">
            <thead className="border-b border-white/10">
              <tr>
                <th className="p-5 text-left">Wallet</th>
                <th className="p-5 text-left">Hashrate</th>
                <th className="p-5 text-left">Workers</th>
                <th className="p-5 text-left">Status</th>
              </tr>
            </thead>

            <tbody>
              {miners.map((miner: any) => (
                <tr
                  key={miner.wallet}
                  className="border-b border-white/5 hover:bg-white/5 transition"
                >
                  <td className="p-5">
                    <Link
                      to={`/miners/${encodeURIComponent(miner.wallet)}`}
                      className="font-mono text-indigo-400 hover:text-cyan-400"
                    >
                      {miner.wallet}
                    </Link>
                  </td>

                  <td className="p-5">
                    {(miner.hashrate / 1e12).toFixed(2)} TH/s
                  </td>

                  <td className="p-5">
                    {miner.workers}
                  </td>

                  <td className="p-5">
                    <span
                      className={`rounded-full px-3 py-1 ${
  miner.status === "Online" ||
  miner.status === "ONLINE_FROM_FORGE"
    ? "bg-green-500/20 text-green-400"
    : "bg-red-500/20 text-red-400"
}`}
                    >
                      {miner.status === "ONLINE_FROM_FORGE"
  ? "Online"
  : miner.status}
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