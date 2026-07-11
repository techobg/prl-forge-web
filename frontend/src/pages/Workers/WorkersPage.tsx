import { Link } from "react-router-dom";
import { useWorkers } from "../../hooks/useWorkers";

export default function WorkersPage() {
  const { data: workers = [], isLoading } = useWorkers();

  if (isLoading) {
    return (
      <main className="min-h-screen bg-[#050816] pt-20">
        <section className="mx-auto max-w-7xl px-6">
          <div className="p-6 text-gray-400">Loading...</div>
        </section>
      </main>
    );
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
    <main className="min-h-screen bg-[#050816] pt-20">
      <section className="mx-auto max-w-7xl px-6">

        <div className="mb-6">
          <h1 className="text-3xl font-bold text-white">
            Miners
          </h1>

          <p className="mt-1 text-sm text-gray-400">
            Active miners connected to PRL Forge.
          </p>
        </div>

        <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5">

          <table className="w-full">

            <thead className="border-b border-white/10">

              <tr>
                <th className="p-4 text-left text-sm">Wallet</th>
                <th className="p-4 text-left text-sm">Hashrate</th>
                <th className="p-4 text-left text-sm">Workers</th>
                <th className="p-4 text-left text-sm">Status</th>
              </tr>

            </thead>

            <tbody>

              {miners.map((miner: any) => (
                <tr
                  key={miner.wallet}
                  className="border-b border-white/5 transition hover:bg-white/5"
                >
                  <td className="p-4">
                    <Link
                      to={`/miners/${encodeURIComponent(miner.wallet)}`}
                      className="font-mono text-indigo-400 transition hover:text-cyan-400"
                    >
                      {miner.wallet}
                    </Link>
                  </td>

                  <td className="p-4 font-semibold">
                    {(miner.hashrate / 1e12).toFixed(2)} TH/s
                  </td>

                  <td className="p-4">
                    {miner.workers}
                  </td>

                  <td className="p-4">
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                        miner.status === "Online" ||
                        miner.status === "ONLINE_FROM_FORGE"
                          ? "bg-green-500/15 text-green-400"
                          : "bg-red-500/15 text-red-400"
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