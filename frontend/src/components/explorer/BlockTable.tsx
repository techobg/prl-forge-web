import { useBlocks } from "../../hooks/useBlocks";
import Card from "../ui/Card";
import { Link } from "react-router-dom";
import type { Block } from "../../types/block";

export default function BlockTable() {
  const { data: blocks, isLoading } = useBlocks();

  if (isLoading) {
    return (
      <Card className="p-6">
        Loading...
      </Card>
    );
  }

  if (!blocks) return null;

  return (
    <Card className="overflow-hidden">

      <div className="border-b border-white/10 p-6">
        <h2 className="text-2xl font-bold">
          Latest Blocks
        </h2>
      </div>

      <table className="w-full">

        <thead className="border-b border-white/10">

          <tr>
            <th className="p-5 text-left">Height</th>
            <th className="p-5 text-left">Miner</th>
            <th className="p-5 text-left">Reward</th>
            <th className="p-5 text-left">Time</th>
          </tr>

        </thead>

        <tbody>

          {blocks.map((block: Block) => (
            <tr
              key={block.height}
              className="border-b border-white/5 hover:bg-white/5"
            >
              <td className="p-5">
  <Link
    to={`/blocks/${block.height}`}
    className="font-semibold text-indigo-400 transition hover:text-indigo-300"
  >
    {block.height}
  </Link>
</td>
              <td className="p-5">{block.miner}</td>
              <td className="p-5">{block.reward}</td>
              <td className="p-5">{block.time}</td>
            </tr>
          ))}

        </tbody>

      </table>

    </Card>
  );
}