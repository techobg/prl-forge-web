import { useBlocks } from "../../hooks/useBlocks";

export default function BlocksPage() {
  const { data: blocks = [], isLoading } = useBlocks();

  return (
    <main className="min-h-screen bg-[#050816] pt-20">
      <section className="mx-auto max-w-7xl px-6">

        <div className="mb-6">
          <h1 className="text-3xl font-bold text-white">
            Blocks
          </h1>

          <p className="mt-1 text-sm text-gray-400">
            History of all blocks found by PRL Forge.
          </p>
        </div>

        <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">

          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs text-gray-400">
              Matured
            </p>

            <p className="mt-1 text-3xl font-bold text-green-400">
              0
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs text-gray-400">
              Immature
            </p>

            <p className="mt-1 text-3xl font-bold text-yellow-400">
              0
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs text-gray-400">
              New
            </p>

            <p className="mt-1 text-3xl font-bold text-cyan-400">
              0
            </p>
          </div>

        </div>

        <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5">

          <table className="w-full">

            <thead className="border-b border-white/10 bg-white/5">

              <tr>
                <th className="p-4 text-left text-sm">Height</th>
                <th className="p-4 text-left text-sm">Miner</th>
                <th className="p-4 text-left text-sm">Time</th>
                <th className="p-4 text-left text-sm">Luck</th>
                <th className="p-4 text-left text-sm">Reward</th>
                <th className="p-4 text-left text-sm">Status</th>
              </tr>

            </thead>

            <tbody>

              {isLoading ? (

                <tr>
                  <td
                    colSpan={6}
                    className="p-8 text-center text-gray-500"
                  >
                    Loading...
                  </td>
                </tr>

              ) : blocks.length === 0 ? (

                <tr>
                  <td
                    colSpan={6}
                    className="p-8 text-center text-gray-500"
                  >
                    No blocks found yet.
                  </td>
                </tr>

              ) : (

                blocks.map((block: any) => (

                  <tr
                    key={block.height}
                    className="border-b border-white/5 transition hover:bg-white/5"
                  >
                    <td className="p-4 font-semibold">
                      {block.height}
                    </td>

                    <td className="p-4">
                      {block.finder}
                    </td>

                    <td className="p-4">
                      {new Date(block.timestamp).toLocaleString()}
                    </td>

                    <td className="p-4">
                      {block.luck ?? "--"} %
                    </td>

                    <td className="p-4">
                      {block.reward} PRL
                    </td>

                    <td className="p-4">
                      <span className="rounded-full bg-green-500/15 px-2.5 py-1 text-xs font-semibold text-green-400">
                        Matured
                      </span>
                    </td>

                  </tr>

                ))

              )}

            </tbody>

          </table>

        </div>

      </section>
    </main>
  );
}