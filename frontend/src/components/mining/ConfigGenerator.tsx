import { useState } from "react";

export default function ConfigGenerator() {
  const [wallet, setWallet] = useState("");
  const [worker, setWorker] = useState("RIG01");
  const [mode, setMode] = useState("solo");
  const [generated, setGenerated] = useState(false);
  const [copied, setCopied] = useState(false);

  const port = mode === "solo" ? "3333" : "4444";

  const config = `SRBMiner-MULTI.exe ^
--algorithm pearl ^
--pool stratum+tcp://pool.prlforge.com:${port} ^
--wallet ${wallet || "YOUR_WALLET"}.${worker}`;

  const batFile = `@echo off

${config}

pause`;

  const copyConfig = async () => {
    await navigator.clipboard.writeText(batFile);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const downloadBat = () => {
    const blob = new Blob([batFile], {
      type: "text/plain;charset=utf-8",
    });

    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "start.bat";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    window.URL.revokeObjectURL(url);
  };

  return (
    <section
  id="config-generator"
  className="mt-12 rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
>
      <h2 className="mb-2 text-2xl font-bold">
        Forge Config Generator
      </h2>

      <p className="mb-6 text-gray-400">
        Generate a ready-to-use SRBMiner configuration for PRL Forge.
      </p>

      <div className="space-y-6">

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Wallet Address
          </label>

          <input
            type="text"
            value={wallet}
            onChange={(e) => setWallet(e.target.value)}
            placeholder="Enter your Pearl wallet address"
            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white focus:border-indigo-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Worker Name
          </label>

          <input
            type="text"
            value={worker}
            onChange={(e) => setWorker(e.target.value)}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white focus:border-indigo-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Mining Mode
          </label>

          <select
            value={mode}
            onChange={(e) => setMode(e.target.value)}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white focus:border-indigo-500 focus:outline-none"
          >
            <option value="solo">
              SOLO Mining (Recommended)
            </option>

            <option value="shared">
              Shared Pool (Coming Soon)
            </option>
          </select>

          {mode === "shared" && (
            <div className="mt-3 rounded-lg border border-yellow-500/30 bg-yellow-500/10 p-3 text-sm text-yellow-300">
              ⚠️ Shared Pool is currently under development and will be available
              in a future PRL Forge release.
            </div>
          )}
        </div>

        <button
          onClick={() => setGenerated(true)}
          className="w-full rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-500"
        >
          Generate Configuration
        </button>

        {generated && (
          <div className="rounded-xl border border-zinc-700 bg-black p-5">

            <h3 className="mb-4 text-lg font-semibold text-white">
              Generated Configuration
            </h3>

            <pre className="overflow-x-auto whitespace-pre-wrap rounded-lg bg-black font-mono text-sm text-emerald-400">
              {batFile}
            </pre>

            <div className="mt-4 flex flex-wrap gap-3">

              <button
                onClick={copyConfig}
                className="rounded-lg bg-indigo-600 px-4 py-2 text-white transition hover:bg-indigo-500"
              >
                {copied ? "✅ Copied!" : "📋 Copy Configuration"}
              </button>

              <button
                onClick={downloadBat}
                className="rounded-lg bg-emerald-600 px-4 py-2 text-white transition hover:bg-emerald-500"
              >
                ⬇ Download BAT
              </button>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}