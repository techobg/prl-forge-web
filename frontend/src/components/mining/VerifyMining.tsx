export default function VerifyMining() {
  const steps = [
    {
      title: "Connected to PRL Forge",
      description:
        "Your miner should display a successful connection to the PRL Forge pool.",
    },
    {
      title: "Wallet Authorized",
      description:
        "Your Pearl wallet has been accepted and your worker is authenticated.",
    },
    {
      title: "Shares Accepted",
      description:
        "Accepted shares confirm that your miner is working correctly.",
    },
    {
      title: "Worker Visible",
      description:
        "Within 30–60 seconds your worker will appear on the Dashboard.",
    },
    {
      title: "Hashrate Updated",
      description:
        "Your reported hashrate will continue increasing as more shares are submitted.",
    },
    {
      title: "Ready to Mine",
      description:
        "Congratulations! Your miner is fully configured and mining on PRL Forge.",
    },
  ];

  return (
    <div className="mt-12 rounded-2xl border border-emerald-500/20 bg-gradient-to-r from-emerald-950/30 to-slate-900/40 p-8">
      <div className="flex items-center gap-3">
        <span className="text-3xl">✅</span>

        <div>
          <h3 className="text-2xl font-bold">
            Verify Your Miner
          </h3>

          <p className="text-gray-400">
            Use this checklist to make sure everything is working correctly.
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {steps.map((step) => (
          <div
            key={step.title}
            className="rounded-xl border border-white/10 bg-black/20 p-5 transition hover:border-emerald-500"
          >
            <div className="flex items-start gap-3">
              <span className="text-xl">✔️</span>

              <div>
                <h4 className="font-semibold text-white">
                  {step.title}
                </h4>

                <p className="mt-2 text-sm text-gray-400">
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-5">
        <p className="text-sm text-emerald-300">
          💡 Tip: If your worker does not appear immediately, wait about one
          minute after the first accepted share. Dashboard statistics are
          updated automatically.
        </p>
      </div>
    </div>
  );
}