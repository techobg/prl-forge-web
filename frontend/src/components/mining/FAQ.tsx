const faq = [
  {
    question: "Why don't I see my worker?",
    answer:
      "Your worker usually appears within 30–60 seconds after the first accepted share.",
  },
  {
    question: "My hashrate is 0 H/s.",
    answer:
      "Wait a minute after connecting. Hashrate is calculated from submitted shares and is not displayed instantly.",
  },
  {
    question: "What wallet should I use?",
    answer:
      "Use an official Pearl wallet address. Block rewards are paid directly to this address.",
  },
  {
    question: "Which miner is recommended?",
    answer:
      "PRL Forge officially recommends SRBMiner-MULTI for the best compatibility and performance.",
  },
  {
    question: "Is PRL Forge a SOLO pool?",
    answer:
      "Yes. Every valid block found by your miner is paid directly to your wallet.",
  },
  {
    question: "Which port should I use?",
    answer:
      "Use stratum+tcp://pool.prlforge.com:3333 unless announced otherwise.",
  },
];

export default function FAQ() {
  return (
    <div className="mt-12 rounded-2xl border border-indigo-500/20 bg-gradient-to-r from-slate-900/40 to-indigo-950/40 p-8">
      <div className="flex items-center gap-3">
        <span className="text-3xl">❓</span>

        <div>
          <h3 className="text-2xl font-bold">
            Frequently Asked Questions
          </h3>

          <p className="text-gray-400">
            Everything you need before you start mining.
          </p>
        </div>
      </div>

      <div className="mt-8 space-y-5">
        {faq.map((item) => (
          <div
            key={item.question}
            className="rounded-xl border border-white/10 bg-black/20 p-5"
          >
            <h4 className="font-semibold text-white">
              {item.question}
            </h4>

            <p className="mt-2 text-sm text-gray-400">
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}