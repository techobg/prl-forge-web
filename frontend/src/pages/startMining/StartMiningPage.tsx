import HowToMine from "../../components/home/HowToMine";

export default function StartMiningPage() {
  return (
    <main className="min-h-screen bg-[#050816] pt-24">
      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="mx-auto max-w-4xl text-center">

          <h1 className="text-5xl font-extrabold tracking-tight text-white md:text-6xl">
            Start Mining Pearl
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Start mining Pearl (PRL) in under five minutes.
            Compatible with SRBMiner and HiveOS.
            No registration required.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">

            <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400">
              ✓ SOLO Mining
            </span>

            <span className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-300">
              ✓ No Registration
            </span>

            <span className="rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-300">
              ✓ 1.5% Pool Fee
            </span>

            <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
              ✓ SRBMiner & HiveOS Ready
            </span>

          </div>

        </div>

        <div className="mt-20">
          <HowToMine />
        </div>

      </section>
    </main>
  );
}