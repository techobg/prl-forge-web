import { useDashboard } from "../../hooks/useDashboard";
import { usePearlPrice } from "../../hooks/usePearlPrice";

export default function PearlNetwork() {
  const { data } = useDashboard();
  const { data: price } = usePearlPrice();

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-white">
  🌐 Pearl Network

      </h2>

      <div className="space-y-5">

        <div className="flex items-center justify-between border-b border-white/5 pb-3">
          <span className="text-gray-400">Network Height</span>

          <span className="font-semibold text-indigo-400">
            {data?.network.height ?? "--"}
          </span>
        </div>

        <div className="flex items-center justify-between border-b border-white/5 pb-3">
          <span className="text-gray-400">Difficulty</span>

          <span className="font-semibold text-indigo-400">
            {data?.network.difficulty?.toLocaleString() ?? "--"}
          </span>
        </div>

        <div className="flex items-center justify-between border-b border-white/5 pb-3">
          <span className="text-gray-400">Network Hashrate</span>

          <span className="font-semibold text-indigo-400">
            Coming Soon
          </span>
        </div>

        <div className="flex items-center justify-between border-white/5 pb-3">
          <span className="text-gray-400">PRL Price</span>

          <span className="font-semibold text-green-400">
            $
            {price?.market_data.current_price.usd?.toFixed(4) ?? "--"}
          </span>
        </div>

      </div>
    </div>
  );
}