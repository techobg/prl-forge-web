import { useState } from "react";
import ConfigGenerator from "../mining/ConfigGenerator";
import HiveOSGuide from "../mining/HiveOSGuide";
import WindowsGuide from "../mining/WindowsGuide";
import VerifyMining from "../mining/VerifyMining";
import FAQ from "../mining/FAQ";



export default function HowToMine() {
  

  const [tab, setTab] = useState<
  "hiveos" | "windows" | "config" | "verify" | "faq"
>("hiveos");

  

  return (
    <section
      id="how-to-mine"
      className="mx-auto max-w-7xl px-6 py-14"
    >
      <div className="mb-10 text-center">
  <h2 className="text-3xl font-bold text-white">
    Getting Started
  </h2>

  <p className="mt-3 text-gray-400">
    Complete your mining setup in four simple steps.
  </p>
</div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-indigo-500">
 
 <div className="mb-3 inline-flex rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-indigo-400">
  Step 1
</div>
 
  <div className="mb-4 text-4xl">👛</div>

  <h3 className="text-xl font-semibold">
  Create a Wallet
  </h3>

  <p className="mt-3 flex-1 text-sm text-gray-400">
    Download the official Pearl Wallet and create your wallet address.
    Your wallet will receive all block rewards mined through PRL Forge.
  </p>

  <a
    href="https://github.com/pearl-research-labs/pearl/releases"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-6 inline-flex w-full justify-center items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-500"
  >
    Download Official Wallet ↗
  </a>

  <p className="mt-3 text-xs text-gray-500">
  Windows • Linux • macOS
</p>
</div>

        <div className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-indigo-500">
  
  <div className="mb-3 inline-flex rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-indigo-400">
  Step 2
</div>
  
  <div className="mb-4 text-4xl">⬇️</div>

  <h3 className="text-xl font-semibold">
  Install SRBMiner
</h3>

  <p className="mt-3 flex-1 text-sm text-gray-400">
    Download the latest version of SRBMiner-MULTI, the recommended miner
    for Pearl. It offers the best compatibility and performance for PRL
    mining.
  </p>

  <a
    href="https://github.com/doktor83/SRBMiner-Multi/releases"
    target="_blank"
    rel="noopener noreferrer"
   className="mt-6 inline-flex w-full justify-center items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-500"
  >
    Download SRBMiner ↗
  </a>

  <p className="mt-3 text-xs text-gray-500">
  Windows • Linux
</p>
</div>

        <div className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-indigo-500">
 
 <div className="mb-3 inline-flex rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-indigo-400">
  Step 3
</div>
 
  <div className="mb-4 text-4xl">⚙️</div>

  <h3 className="text-xl font-semibold">
  Setup Your Miner
</h3>

<p className="mt-3 flex-1 text-sm text-gray-400">
  Choose your preferred platform and follow the setup guide for HiveOS or
  Windows before generating your mining configuration.
</p>

<button
  onClick={() => {
  setTab("hiveos");

  setTimeout(() => {
    document
      .getElementById("guide-section")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }, 50);
}}
  className="mt-6 inline-flex w-full justify-center items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-500"
>
  📖 Open Setup Guide
</button>

<p className="mt-3 text-xs text-gray-500">
  HiveOS • Windows
</p>
</div>

        <div className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-indigo-500">
  
  
  <div className="mb-3 self-start inline-flex rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-indigo-400">
  Step 4
</div>
  
  <div className="mb-4 text-4xl">⛏️</div>

 <h3 className="text-xl font-semibold">
  Generate Mining Config
</h3>

<p className="mt-3 flex-1 text-sm text-gray-400">
  Generate a ready-to-use SRBMiner configuration using your Pearl wallet
  address and worker name. Copy the generated config, launch your miner
  and start mining in seconds.
</p>

<button
  onClick={() => setTab("config")}
 className="mt-6 inline-flex w-full justify-center items-center gap-2 rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-violet-500"
>
  ⚙️ Open Config Generator
</button>

<p className="mt-3 text-xs font-medium text-emerald-400">
  ✓ No Manual Editing Required
</p>
</div>
      </div>

     <div className="mt-8 flex justify-center">
  <div className="inline-flex flex-wrap gap-2 rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-md">

  <button
    onClick={() => setTab("hiveos")}
    className={`relative rounded-xl px-6 py-3 font-semibold transition-all duration-300 ease-out ${
  tab === "hiveos"
    ? "bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-xl shadow-indigo-600/40 scale-105"
    : "text-gray-300 hover:bg-white/10 hover:text-white text-gray-300 hover:border-indigo-400 hover:bg-white/10"
}`}
      
  >
    🐝 HiveOS

    {tab === "hiveos" && (
  <div className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-white" />
)}
  </button>

  <button
    
     onClick={() => setTab("windows")}
    className={`relative overflow-hidden rounded-xl border px-6 py-3 font-medium transition-all duration-300 ${
  tab === "windows"
    ? "border-indigo-500 bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
    : "border-white/10 bg-white/5 text-gray-300 hover:border-indigo-400 hover:bg-white/10"
}`}
      
  >
    🪟 Windows

    {tab === "windows" && (
  <div className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-white" />
)}
  </button>

  <button
    
     onClick={() => setTab("verify")}
    className={`relative overflow-hidden rounded-xl border px-6 py-3 font-medium transition-all duration-300 ${
  tab === "verify"
    ? "border-indigo-500 bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
    : "border-white/10 bg-white/5 text-gray-300 hover:border-indigo-400 hover:bg-white/10"
}`}
      
  >
    ✅ Verify

    {tab === "verify" && (
  <div className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-white" />
)}
  </button>

<button
  onClick={() => setTab("config")}
  className={`relative overflow-hidden rounded-xl border px-6 py-3 font-medium transition-all duration-300 ${
    tab === "config"
      ? "border-indigo-500 bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
      : "border-white/10 bg-white/5 text-gray-300 hover:border-indigo-400 hover:bg-white/10"
  }`}
>
  ⚙️ Config

  {tab === "config" && (
  <div className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-white" />
)}
</button>

  <button
     onClick={() => setTab("faq")}
    className={`relative overflow-hidden rounded-xl border px-6 py-3 font-medium transition-all duration-300 ${
  tab === "faq"
    ? "border-indigo-500 bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
    : "border-white/10 bg-white/5 text-gray-300 hover:border-indigo-400 hover:bg-white/10"
}`}
      
  >
    ❓ FAQ

    {tab === "faq" && (
  <div className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-white" />
)}
  </button>

</div>

 </div>

<div
  id="guide-section"
  className="mt-8 animate-fade-in scroll-mt-32"
>
  {tab === "hiveos" && <HiveOSGuide />}

  {tab === "windows" && <WindowsGuide />}

  {tab === "config" && <ConfigGenerator />}

  {tab === "verify" && <VerifyMining />}

  {tab === "faq" && <FAQ />}
</div>
    </section>
  );
}