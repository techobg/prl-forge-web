import { useParams } from "react-router-dom";
import { useWallet } from "../../hooks/useWallet";

export default function WalletPage() {
  const { address } = useParams();
  const { data: wallet, isLoading } = useWallet(address);

  if (isLoading) {
  return (
    <main className="min-h-screen bg-[#050816] pt-24">
      <section className="mx-auto max-w-7xl px-6">
        <h1 className="text-3xl font-bold">Loading wallet...</h1>
      </section>
    </main>
  );
}

if (!wallet) {
  return (
    <main className="min-h-screen bg-[#050816] pt-24">
      <section className="mx-auto max-w-7xl px-6">
        <h1 className="text-3xl font-bold">Wallet not found</h1>
      </section>
    </main>
  );
}
  return (
    <main className="min-h-screen bg-[#050816] pt-24">
      <section className="mx-auto max-w-7xl px-6">

  <h1 className="text-5xl font-bold">
    Wallet
  </h1>

  <p className="mt-4 break-all text-gray-400">
    {wallet.address}
  </p>

  <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-8">

    <div className="space-y-4">

      <p><strong>Hashrate:</strong> {wallet.hashrate}</p>

      <p><strong>Workers:</strong> {wallet.workers}</p>

      <p><strong>Shares:</strong> {wallet.shares}</p>

      <p><strong>Pending Balance:</strong> {wallet.pendingBalance}</p>

      <p><strong>Paid Balance:</strong> {wallet.paidBalance}</p>

    </div>

  </div>

</section>
    </main>
  );
}