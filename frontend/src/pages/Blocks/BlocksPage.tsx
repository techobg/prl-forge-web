import { useBlocks } from "../../hooks/useBlocks";


export default function BlocksPage() {
  const { data: blocks = [], isLoading } = useBlocks();
  return (
    <main className="min-h-screen bg-[#050816] pt-24">
      <section className="mx-auto max-w-7xl px-6">

        <div className="mb-10">
          <h1 className="text-5xl font-bold text-white">
            Blocks
          </h1>

          <p className="mt-2 text-gray-400">
            History of all blocks found by PRL Forge.
          </p>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-gray-400">Matured</p>
            <p className="mt-2 text-4xl font-bold text-green-400">
              0
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-gray-400">Immature</p>
            <p className="mt-2 text-4xl font-bold text-yellow-400">
              0
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-gray-400">New</p>
            <p className="mt-2 text-4xl font-bold text-cyan-400">
              0
            </p>
          </div>

        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">

          <table className="w-full">

            <thead className="border-b border-white/10 bg-white/5">

              <tr>

                <th className="p-5 text-left">Height</th>
                <th className="p-5 text-left">Miner</th>
                <th className="p-5 text-left">Time</th>
                <th className="p-5 text-left">Luck</th>
                <th className="p-5 text-left">Reward</th>
                <th className="p-5 text-left">Status</th>

              </tr>

            </thead>

            <tbody>

  {isLoading ? (

    <tr>
      <td
        colSpan={6}
        className="p-12 text-center text-gray-500"
      >
        Loading...
      </td>
    </tr>

  ) : blocks.length === 0 ? (

    <tr>
      <td
        colSpan={6}
        className="p-12 text-center text-gray-500"
      >
        No blocks found yet.
      </td>
    </tr>

  ) : (

  blocks.map((block: any) => (

    <tr
      key={block.height}
      className="border-b border-white/5 hover:bg-white/5"
    >
      <td className="p-5 font-semibold">
        {block.height}
      </td>

      <td className="p-5">
        {block.finder}
      </td>

      <td className="p-5">
        {new Date(block.timestamp).toLocaleString()}
      </td>

      <td className="p-5">
        {block.luck ?? "--"} %
      </td>

      <td className="p-5">
        {block.reward} PRL
      </td>

      <td className="p-5">
        <span className="text-green-400">
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