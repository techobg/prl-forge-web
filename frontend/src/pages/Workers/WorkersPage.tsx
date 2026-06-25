import { useWorkers } from "../../hooks/useWorkers";

export default function WorkersPage() {
  const { data: workers, isLoading } = useWorkers();

  if (isLoading) {
    return <div className="p-8 text-white">Loading...</div>;
  }

  return (
    <main className="min-h-screen bg-[#050816] pt-24">
      <section className="mx-auto max-w-7xl px-6">

        <h1 className="mb-8 text-5xl font-bold">
          Workers
        </h1>

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

              {workers?.map((worker: any) => (

                <tr
                  key={worker.name}
                  className="border-b border-white/5 hover:bg-white/5"
                >
                  <td className="p-5">{worker.name}</td>

                  <td className="p-5">{worker.hashrate}</td>

                  <td className="p-5">{worker.shares}</td>

                  <td className="p-5">{worker.lastShare}</td>

                  <td className="p-5">

                    <span
                      className={`rounded-full px-3 py-1 ${
                        worker.status === "Online"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-red-500/20 text-red-400"
                      }`}
                    >
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