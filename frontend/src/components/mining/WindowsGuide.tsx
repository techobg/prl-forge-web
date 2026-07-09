import { useState } from "react";

export default function WindowsGuide() {
  const [copied, setCopied] = useState(false);

  const startBat = `SRBMiner-MULTI.exe ^
--algorithm progpowz ^
--pool stratum+tcp://pool.prlforge.com:3333 ^
--wallet YOUR_PRL_WALLET ^
--password %WORKER_NAME%`;

  const copyConfig = async () => {
    await navigator.clipboard.writeText(startBat);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-12 rounded-2xl border border-indigo-500/20 bg-gradient-to-r from-slate-900/40 to-indigo-950/40 p-8">

      <div className="flex items-center gap-3">
        <span className="text-3xl">🪟</span>

        <div>
          <h3 className="text-2xl font-bold">
            Windows Setup
          </h3>

          <p className="text-gray-400">
            Mine Pearl on Windows using SRBMiner-MULTI.
          </p>
        </div>
      </div>

      <div className="mt-8">

        <p className="mb-3 text-sm font-semibold text-gray-300">
          Example start.bat
        </p>

        <div className="overflow-x-auto rounded-xl border border-white/10 bg-black/40 p-5">
          <pre className="text-sm text-emerald-400 whitespace-pre-wrap">
{startBat}
          </pre>
        </div>

        <button
          onClick={copyConfig}
          className="mt-4 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-500"
        >
          {copied ? "✅ Copied!" : "📋 Copy start.bat"}
        </button>

      </div>

      <div className="mt-10 rounded-xl border border-white/10 bg-black/20 p-6">

        <h4 className="mb-4 text-lg font-semibold">
          Quick Start
        </h4>

        <ol className="list-inside list-decimal space-y-2 text-sm text-gray-300">
          <li>Download SRBMiner-MULTI.</li>
          <li>Extract the archive.</li>
          <li>Create a new <code>start.bat</code> file.</li>
          <li>Paste the configuration above.</li>
          <li>Replace YOUR_PRL_WALLET with your wallet.</li>
          <li>Double-click start.bat.</li>
          <li>Wait for the first accepted share.</li>
          <li>Check your miner on the PRL Forge dashboard.</li>
        </ol>

      </div>

    </div>
  );
}