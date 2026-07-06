import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useWorkers } from "../../hooks/useWorkers";

export default function MinerPage() {
  const { wallet } = useParams();
  const { data: workers = [], isLoading } = useWorkers();

  const minerWorkers = useMemo(() => {
    return (workers as any[]).filter(
      (w) => w.wallet === decodeURIComponent(wallet || "")
    );
  }, [workers, wallet]);

  const totalHashrate = minerWorkers.reduce(
    (sum, w) => sum + Number(w.hashrate || 0),
    0
  );

  if (isLoading) {
    return <div className="p-8 text-white">Loading...</div>;
  }

  return (
    <main className="min-h-screen bg-[#050816] pt-24">
      <section className="mx-auto max-w-7xl px-6">

        <h1 className="mb-8 text-5xl font-bold text-white">
          Miner
        </h1>

        <div className="mb-8 rounded-2xl border border-white/10 bg-white/5 p-6">

          <p className="font-mono break-all text-cyan-400">
            {wallet}
          </p>

          <div className="mt-6 grid grid-cols-2 gap-6">

            <div>
              <p className="text-gray-400">Workers</p>
              <p className="text-3xl font-bold">
                {minerWorkers.length}
              </p>
            </div>

            <div>
              <p className="text-gray-400">Hashrate</p>
              <p className="text-3xl font-bold">
                {(totalHashrate / 1e12).toFixed(2)} TH/s
              </p>
            </div>

          </div>

        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">

          <table className="w-full">

            <thead className="border-b border-white/10">
              <tr>
                <th className="p-5 text-left">Worker</th>
                <th className="p-5 text-left">Hashrate</th>
                <th className="p-5 text-left">Shares</th>
                <th className="p-5 text-left">Last Share</th>
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
                   {worker.lastSeen}
                  </td>

                  <td className="p-5">
                    <span className="rounded-full bg-green-500/20 px-3 py-1 text-green-400">
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