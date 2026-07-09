
import CopyField from "./CopyField";

export default function HiveOSGuide() {
  

  return (
    <div
      id="pool-connection"
      className="mt-12 rounded-2xl border border-indigo-500/20 bg-gradient-to-r from-indigo-950/40 to-slate-900/40 p-8"
    >
      <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2">
  <span>✅</span>

  <span className="text-sm font-medium text-emerald-300">
    Official PRL Forge Configuration
  </span>
</div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">

 


  <CopyField
    title="Pool URL"
    value="stratum+tcp://pool.prlforge.com:3333"
  />

  <CopyField
  title="Wallet"
  value="YOUR_WALLET.RIG01"
  color="text-yellow-400"
/>

  <div>
  <CopyField
    title="Worker Name"
    value="RIG01"
    color="text-cyan-400"
  />

  <p className="mt-2 text-xs text-gray-500">
    This name identifies your mining rig and is appended to your wallet
    (example: <span className="font-mono">YOUR_WALLET.RIG01</span>).
  </p>
</div>

  <div className="lg:col-span-2">
    <CopyField
  title="Algorithm"
  value="pearlhash"
  color="text-purple-400"
/>
  </div>


      </div>

      <div className="mt-10 rounded-xl border border-white/10 bg-black/20 p-6">
        <h4 className="mb-4 text-lg font-semibold">
          Quick Setup
        </h4>

        <ol className="list-inside list-decimal space-y-2 text-sm text-gray-300">
          <li>Open HiveOS.</li>
          <li>Create a new Flight Sheet.</li>
          <li>Select Pearl (PRL).</li>
          <li>Select SRBMiner.</li>
          <li>Enter your PRL wallet.</li>
          <li>Paste the Pool URL.</li>
          <li>Apply the Flight Sheet.</li>
          <li>Start Mining.</li>
        </ol>
      </div>
    </div>
  );
}