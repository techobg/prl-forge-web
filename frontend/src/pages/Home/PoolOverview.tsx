import { useDashboard } from "../../hooks/useDashboard";

function formatHashrate(hs: number) {
  const units = ["H/s", "KH/s", "MH/s", "GH/s", "TH/s", "PH/s"];

  let value = hs;
  let unit = 0;

  while (value >= 1000 && unit < units.length - 1) {
    value /= 1000;
    unit++;
  }

  return `${value.toFixed(2)} ${units[unit]}`;
}

export default function PoolOverview() {
  const { data } = useDashboard();

  return (
    <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-indigo-400/40 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]">
      <h2 className="mb-8 flex items-center gap-2 text-2xl font-bold text-white">
        ⛏ PRL Forge Pool
      </h2>

      <div className="space-y-5">

        <div className="flex items-center justify-between border-b border-white/5 pb-3">
          <span className="text-gray-400">
            Pool Hashrate
          </span>

          <span className="font-semibold text-indigo-400">
            {formatHashrate(data?.network.poolHashrate ?? 0)}
          </span>
        </div>

        <div className="flex items-center justify-between border-b border-white/5 pb-3">
          <span className="text-gray-400">
            Active Miners
          </span>

          <span className="font-semibold text-indigo-400">
            {data?.workers.online ?? 0}
          </span>
        </div>

        <div className="flex items-center justify-between border-b border-white/5 pb-3">
          <span className="text-gray-400">
            Workers
          </span>

          <span className="font-semibold text-indigo-400">
            {data?.workers.online ?? 0}
          </span>
        </div>

        <div className="flex items-center justify-between border-b border-white/5 pb-3">
          <span className="text-gray-400">
            Pool Fee
          </span>

          <span className="font-semibold text-green-400">
            1.5%
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-400">
            Status
          </span>

          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.8)]"></div>

            <span className="font-semibold text-green-400">
              Online
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}