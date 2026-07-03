import { useBlocks } from "../../hooks/useBlocks";
import Card from "../ui/Card";

export default function RecentBlocks() {
  const { data: blocks, isLoading } = useBlocks();

  const blockList = blocks ?? [];

  return (
    <Card className="overflow-hidden">
      <div className="border-b border-white/10 p-6">
        <h2 className="text-2xl font-bold">
          Recent Blocks
        </h2>
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
                className="p-8 text-center text-gray-400"
              >
                No blocks found yet
              </td>
            </tr>
          ) : (
            blockList.map((block: any) => (
              <tr
                key={block.height}
                className="border-b border-white/5 hover:bg-white/5 transition"
              >
                <td className="p-5">
                  {block.height}
                </td>

                <td className="p-5">
                  {block.miner}
                </td>

                <td className="p-5">
                  {block.reward}
                </td>

                <td className="p-5">
                  {block.time}
                </td>

                <td className="p-5">
                  {block.confirmations}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </Card>
  );
}