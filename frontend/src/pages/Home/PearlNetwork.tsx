import { useDashboard } from "../../hooks/useDashboard";
import { usePearlPrice } from "../../hooks/usePearlPrice";

function formatHashrate(hs?: number) {
  if (!hs) {
    return "--";
  }

  const units = [
    "H/s",
    "KH/s",
    "MH/s",
    "GH/s",
    "TH/s",
    "PH/s",
    "EH/s",
  ];

  let value = hs;
  let unit = 0;

  while (value >= 1000 && unit < units.length - 1) {
    value /= 1000;
    unit++;
  }

  return `${value.toFixed(2)} ${units[unit]}`;
}

function formatDifficulty(diff?: number) {
  if (!diff) {
    return "--";
  }

  if (diff >= 1_000_000) {
    return `${(diff / 1_000_000).toFixed(2)} M`;
  }

  if (diff >= 1_000) {
    return `${(diff / 1_000).toFixed(2)} K`;
  }

  return diff.toString();
}

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
            {formatDifficulty(data?.network.difficulty)}
          </span>
        </div>

       <div className="flex items-center justify-between border-b border-white/5 pb-3">
  <span className="text-gray-400">
    Network Hashrate
  </span>

  <span className="font-semibold text-indigo-400">
    {formatHashrate(data?.network.networkHashrate ?? 0)}
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