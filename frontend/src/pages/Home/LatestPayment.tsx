export default function LatestPayment() {
  return (
    <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-indigo-400/40 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]">

      <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold text-white">
        💰 Latest Payment
      </h2>

      <div className="space-y-5">

        <div className="flex items-center justify-between border-b border-white/5 pb-3">
          <span className="text-gray-400">
            Address
          </span>

          <span className="font-semibold text-white">
            --
          </span>
        </div>

        <div className="flex items-center justify-between border-b border-white/5 pb-3">
          <span className="text-gray-400">
            Amount
          </span>

          <span className="font-semibold text-green-400">
            --
          </span>
        </div>

        <div className="flex items-center justify-between border-b border-white/5 pb-3">
          <span className="text-gray-400">
            Date
          </span>

          <span className="font-semibold text-white">
            --
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-400">
            TxID
          </span>

          <span className="font-semibold text-indigo-400">
            --
          </span>
        </div>

      </div>

    </div>
  );
}