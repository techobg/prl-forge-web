import HowToMine from "../../components/home/HowToMine";
export default function StartMiningPage() {
  return (
    <main className="min-h-screen bg-[#050816] pt-24">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h1 className="text-5xl font-bold text-white">
          Start Mining
        </h1>

        <p className="mt-6 text-lg text-gray-400">
          Generate your SRBMiner configuration and connect to PRL Forge.
        </p>

        <HowToMine />
      </section>
    </main>
  );
}