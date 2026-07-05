import { useDashboard } from "../../hooks/useDashboard";

export default function BlockReward() {
  const { data, isLoading } = useDashboard();

  if (isLoading || !data) {
    return null;
  }

  const reward = data.reward;

  return (
    <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-indigo-400/40 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]">
      <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold text-white">
        💎 Block Reward
      </h2>

      <div className="space-y-5">

        <div className="flex items-center justify-between border-b border-white/5 pb-3">
          <span className="text-gray-400">
            Base Reward
          </span>

          <span className="font-semibold text-indigo-400">
            {reward.baseReward.toFixed(2)} PRL
          </span>
        </div>

        <div className="flex items-center justify-between border-b border-white/5 pb-3">
          <span className="text-gray-400">
            Transaction Fees
          </span>

          <span className="font-semibold text-white">
            +{reward.txFees.toFixed(8)} PRL
          </span>
        </div>
        <div className="flex items-center justify-between border-b border-white/5 pb-3">
  <span className="text-gray-400">
    Total Reward
  </span>

  <span className="font-semibold text-cyan-400">
    {reward.totalReward.toFixed(2)} PRL
  </span>
</div>
        <div className="flex items-center justify-between border-b border-white/5 pb-3">
          <span className="text-gray-400">
            Pool Fee
          </span>

          <span className="font-semibold text-red-400">
            -{reward.poolFee.toFixed(2)} PRL
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-400">
            Miner Reward
          </span>

          <span className="font-semibold text-green-400">
            {reward.minerReward.toFixed(2)} PRL
          </span>
        </div>

      </div>
    </div>
  );
}