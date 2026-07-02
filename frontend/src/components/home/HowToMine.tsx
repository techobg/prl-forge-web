import { useState } from "react";
import { ExternalLink } from "lucide-react";
import ConfigGenerator from "../mining/ConfigGenerator";



export default function HowToMine() {
  const [copied, setCopied] = useState(false);

  const copyPoolAddress = async () => {
    await navigator.clipboard.writeText(
      "stratum+tcp://pool.prlforge.com:3333"
    );

    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="how-to-mine"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold">
          How to Mine Pearl
        </h2>

        <p className="mt-4 text-gray-400">
          Start mining with PRL Forge in just a few simple steps.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-indigo-500">
  <div className="mb-4 text-4xl">👛</div>

  <h3 className="text-xl font-semibold">
    Create Wallet
  </h3>

  <p className="mt-3 text-sm text-gray-400">
    Download the official Pearl Wallet and create your wallet address.
    Your wallet will receive all block rewards mined through PRL Forge.
  </p>

  <a
    href="https://github.com/pearl-research-labs/pearl/releases"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-6 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-500"
  >
    Download Official Wallet ↗
  </a>

  <p className="mt-3 text-xs text-gray-500">
    Windows • Linux • macOS
  </p>
</div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-indigo-500">
  <div className="mb-4 text-4xl">⬇️</div>

  <h3 className="text-xl font-semibold">
    Download SRBMiner
  </h3>

  <p className="mt-3 text-sm text-gray-400">
    Download the latest version of SRBMiner-MULTI, the recommended miner
    for Pearl. It offers the best compatibility and performance for PRL
    mining.
  </p>

  <a
    href="https://github.com/doktor83/SRBMiner-Multi/releases"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-6 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-500"
  >
    Download SRBMiner ↗
  </a>

  <p className="mt-3 text-xs text-gray-500">
    Windows • Linux
  </p>
</div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-indigo-500">
  <div className="mb-4 text-4xl">⚙️</div>

  <h3 className="text-xl font-semibold">
    Generate Configuration
  </h3>

  <p className="mt-3 text-sm text-gray-400">
    Automatically generate a ready-to-use SRBMiner configuration using
    your Pearl wallet address and worker name. No manual editing required.
  </p>

  <button
  onClick={() =>
    document
      .getElementById("config-generator")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
  }
  className="mt-6 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-500"
>
  Generate Config
</button>

  <p className="mt-3 text-xs text-gray-500">
    Coming Soon
  </p>
</div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-indigo-500">
  <div className="mb-4 text-4xl">⛏️</div>

  <h3 className="text-xl font-semibold">
    Start Mining
  </h3>

  <p className="mt-3 text-sm text-gray-400">
    Launch SRBMiner using your generated configuration. Your worker and live
    hashrate will automatically appear on the PRL Forge dashboard after the
    first accepted share.
  </p>

  <button
  onClick={() =>
    document
      .getElementById("pool-connection")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
  }
  className="mt-6 inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-500"
>
  Connect to PRL Forge
</button>

  <p className="mt-3 text-xs text-gray-500">
    SOLO Mining • Instant Dashboard
  </p>
</div>
      </div>
      <div className="mt-12 rounded-2xl border border-indigo-500/20 bg-gradient-to-r from-indigo-950/40 to-slate-900/40 p-8">
  <h3 className="text-2xl font-bold">
    PRL Forge Pool Connection
  </h3>
<div
  id="pool-connection"
  className="mt-12 rounded-2xl border border-indigo-500/20 bg-gradient-to-r from-indigo-950/40 to-slate-900/40 p-8"
></div>
  <p className="mt-3 text-gray-400">
    Use the following stratum endpoint to connect your miner to the PRL Forge SOLO pool.
  </p>

  <div className="mt-6 rounded-xl border border-white/10 bg-black/40 p-4">
    <code className="text-lg text-emerald-400">
      stratum+tcp://pool.prlforge.com:3333
    </code>
  </div>

  <button onClick={copyPoolAddress}>
  {copied ? "✅ Copied!" : "📋 Copy Pool Address"}
</button>

  <p className="mt-3 text-sm text-gray-500">
    Recommended port for SOLO mining.
  </p>
</div>
<ConfigGenerator />
    </section>
  );
}