import HowToMine from "../../components/home/HowToMine";

export default function StartMiningPage() {
  return (
    <main className="min-h-screen bg-[#050816] pt-24">
      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold text-white">
            Start Mining
          </h1>

          <p className="mt-6 text-lg text-gray-400">
            Mine Pearl (PRL) with SRBMiner or HiveOS in just a few minutes.
            Follow the guide below to configure your miner and connect to
            PRL Forge.
          </p>
        </div>

        <HowToMine />

      </section>
    </main>
  );
}