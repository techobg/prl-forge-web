import { useBlocks } from "../../hooks/useBlocks";
import Card from "../ui/Card";
import { Link } from "react-router-dom";

export default function RecentBlocks() {
  const { data: blocks, isLoading } = useBlocks();

  const blockList = blocks ?? [];

  return (
    <Card className="overflow-hidden">
      <div className="border-b border-white/10 p-6">
        <div className="flex items-center justify-between">
  <h2 className="text-2xl font-bold">
  Recent Blocks{" "}
  <span className="ml-2 rounded-full bg-cyan-500/20 px-2 py-1 text-sm text-cyan-400">
    {blockList.length}
  </span>
</h2>

  <div className="flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1">
    <span className="h-2.5 w-2.5 rounded-full bg-green-400 animate-pulse" />

    <span className="text-sm font-semibold text-green-400">
      LIVE
    </span>
  </div>
</div>
      </div>

      <table className="w-full">
        <thead className="border-b border-white/10">
          <tr>
            <th className="p-5 text-left">
              Height
            </th>

            <th className="p-5 text-left">
              Miner
            </th>

            <th className="p-5 text-left">
              Reward
            </th>

            <th className="p-5 text-left">
              Time
            </th>

            <th className="p-5 text-left">
              Confirms
            </th>
          </tr>
        </thead>

        <tbody>
          {isLoading ? (
            <tr>
              <td
                colSpan={5}
                className="p-8 text-center text-gray-400"
              >
                Loading...
              </td>
            </tr>
          ) : blockList.length === 0 ? (
            <tr>
  <td
    colSpan={5}
    className="p-10 text-center"
  >
    <div className="flex flex-col items-center justify-center gap-3">

      <div className="text-5xl">
        ⛏️
      </div>

      <p className="text-lg font-semibold text-white">
        No blocks found yet
      </p>

      <p className="max-w-md text-sm text-gray-400">
        Be the first miner to find a Pearl block and make PRL Forge history.
      </p>

    </div>
  </td>
</tr>
          ) : (
            blockList.map((block: any) => (
              <tr
                key={block.height}
                className="border-b border-white/5 hover:bg-white/5 transition"
              >
                <td className="p-5">
  <Link
    to={`/blocks/${block.height}`}
    className="font-semibold text-cyan-400 hover:text-cyan-300 transition"
  >
    #{block.height}
  </Link>
</td>

                <td className="p-5">
  <Link
    to={`/miners/${encodeURIComponent(block.miner)}`}
    className="font-mono text-cyan-400 hover:text-cyan-300 transition"
  >
    {block.miner.slice(0, 12)}...
    {block.miner.slice(-6)}
  </Link>
</td>

                <td className="p-5">
                  {block.reward}
                </td>

                <td className="p-5">
                  {block.time}
                </td>

                <td className="p-5">
  <span
    className={`rounded-full px-3 py-1 text-sm font-semibold ${
      block.confirmations >= 100
        ? "bg-green-500/20 text-green-400"
        : block.confirmations >= 10
        ? "bg-yellow-500/20 text-yellow-400"
        : "bg-red-500/20 text-red-400"
    }`}
  >
    {block.confirmations}
  </span>
</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </Card>
  );
}