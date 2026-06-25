import { useParams } from "react-router-dom";
import { useBlock } from "../../hooks/useBlock";

export default function BlocksPage() {
  const { height } = useParams();
  const { data: block, isLoading } = useBlock(height);
if (isLoading) {
  return (
    <main className="min-h-screen bg-[#050816] pt-24">
      <section className="mx-auto max-w-7xl px-6">
        <h1 className="text-3xl font-bold">Loading block...</h1>
      </section>
    </main>
  );
}

if (!block) {
  return (
    <main className="min-h-screen bg-[#050816] pt-24">
      <section className="mx-auto max-w-7xl px-6">
        <h1 className="text-3xl font-bold">Block not found</h1>
      </section>
    </main>
  );
}
  return (
    <main className="min-h-screen bg-[#050816] pt-24">
      <section className="mx-auto max-w-7xl px-6">

        <h1 className="text-5xl font-bold">
  Block #{block.height}
</h1>

<div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-8">

  <div className="space-y-4">

    <p><strong>Hash:</strong> {block.hash}</p>

    <p><strong>Miner:</strong> {block.miner}</p>

    <p><strong>Reward:</strong> {block.reward}</p>

    <p><strong>Time:</strong> {block.time}</p>

    <p><strong>Confirmations:</strong> {block.confirmations}</p>

  </div>

</div>

      </section>
    </main>
  );
}