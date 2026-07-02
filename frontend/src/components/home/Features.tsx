export default function Features() {
  const features = [
    {
      icon: "⚡",
      title: "Low Pool Fee",
      text: "Competitive fees with maximum mining profitability.",
    },
    {
      icon: "💎",
      title: "Solo & Pool",
      text: "Choose between stable pool mining or full solo rewards.",
    },
    {
      icon: "📊",
      title: "Live Statistics",
      text: "Real-time network, workers and block statistics.",
    },
    {
      icon: "🛡️",
      title: "Enterprise Stability",
      text: "Reliable infrastructure with automatic job updates.",
    },
    {
      icon: "🚀",
      title: "Fast Performance",
      text: "Low latency Stratum server for maximum efficiency.",
    },
    {
      icon: "💰",
      title: "Instant Payouts",
      text: "Automatic payouts with transparent accounting.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold">
          Why PRL Forge?
        </h2>

        <p className="mt-4 text-gray-400">
          Everything you need for efficient Pearl mining.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-indigo-500 hover:bg-white/10"
          >
            <div className="mb-5 text-4xl">
              {feature.icon}
            </div>

            <h3 className="text-xl font-semibold">
              {feature.title}
            </h3>

            <p className="mt-3 text-sm text-gray-400">
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}