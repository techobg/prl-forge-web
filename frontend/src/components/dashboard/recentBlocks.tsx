import { useBlocks } from "../../hooks/useBlocks";
import Card from "../ui/Card";
import { Link } from "react-router-dom";

export default function RecentBlocks() {
  const { data: blocks, isLoading } = useBlocks();

  const blockList = blocks ?? [];

  return (
    <Card className="overflow-hidden">
      <div className="border-b border-white/10 p-5">
        <div className="flex items-center justify-between">

          <h2 className="text-xl font-bold">
            Recent Blocks{" "}
            <span className="ml-2 rounded-full bg-cyan-500/20 px-2 py-0.5 text-xs text-cyan-400">
              {blockList.length}
            </span>
          </h2>

          <div className="flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-2.5 py-1">
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />

            <span className="text-xs font-semibold text-green-400">
              LIVE
            </span>
          </div>

        </div>
      </div>

      <table className="w-full">
        <thead className="border-b border-white/10">
          <tr>
            <th className="p-4 text-left text-sm">Height</th>
            <th className="p-4 text-left text-sm">Miner</th>
            <th className="p-4 text-left text-sm">Reward</th>
            <th className="p-4 text-left text-sm">Time</th>
            <th className="p-4 text-left text-sm">Confirms</th>
          </tr>
        </thead>

        <tbody>
          {isLoading ? (
            <tr>
              <td
                colSpan={5}
                className="p-6 text-center text-gray-400"
              >
                Loading...
              </td>
            </tr>
          ) : blockList.length === 0 ? (
            <tr>
              <td
                colSpan={5}
                className="p-8 text-center"
              >
                <div className="flex flex-col items-center justify-center gap-2">

                  <div className="text-4xl">
                    ⛏️
                  </div>

                  <p className="text-base font-semibold text-white">
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
                className="border-b border-white/5 transition hover:bg-white/5"
              >
                <td className="p-4">
                  <Link
                    to={`/blocks/${block.height}`}
                    className="font-semibold text-cyan-400 transition hover:text-cyan-300"
                  >
                    #{block.height}
                  </Link>
                </td>

                <td className="p-4">
                  <Link
                    to={`/miners/${encodeURIComponent(block.miner)}`}
                    className="font-mono text-cyan-400 transition hover:text-cyan-300"
                  >
                    {block.miner.slice(0, 12)}...
                    {block.miner.slice(-6)}
                  </Link>
                </td>

                <td className="p-4">
                  {block.reward}
                </td>

                <td className="p-4">
                  {block.time}
                </td>

                <td className="p-4">
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
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