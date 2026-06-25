import { Link } from "react-router-dom";
import { useBlocks } from "../../hooks/useBlocks";
import type { Block } from "../../types/block";

export default function LatestBlocks() {
  const { data: blocks, isLoading } = useBlocks();

  if (isLoading) {
    return (
      <section className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="text-2xl font-bold">Loading blocks...</h2>
      </section>
    );
  }

  if (!blocks) {
    return null;
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-4xl font-bold">
          Latest Blocks
        </h2>

        <Link
          to="/explorer"
          className="text-indigo-400 transition hover:text-indigo-300"
        >
          View all →
        </Link>
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
        <table className="w-full">
          <thead className="border-b border-white/10">
            <tr>
              <th className="p-5 text-left">Height</th>
              <th className="p-5 text-left">Reward</th>
              <th className="p-5 text-left">Miner</th>
              <th className="p-5 text-left">Time</th>
              <th className="p-5 text-left">Confirmations</th>
            </tr>
          </thead>

          <tbody>
            {blocks.map((block: Block) => (
              <tr
                key={block.height}
                className="border-b border-white/5 transition hover:bg-white/5"
              >
                <td className="p-5">
                  <Link
                    to={`/blocks/${block.height}`}
                    className="font-semibold text-indigo-400 transition hover:text-indigo-300"
                  >
                    {block.height}
                  </Link>
                </td>

                <td className="p-5">{block.reward}</td>

                <td className="p-5">{block.miner}</td>

                <td className="p-5">{block.time}</td>

                <td className="p-5">
                  <span className="rounded-full bg-green-500/20 px-3 py-1 text-green-400">
                    {block.confirmations}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}