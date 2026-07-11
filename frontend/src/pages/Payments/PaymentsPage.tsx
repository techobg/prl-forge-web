import { usePayments } from "../../hooks/usePayments";

export default function PaymentsPage() {
  const { data: payments, isLoading } = usePayments();

  if (isLoading) {
    return (
      <main className="min-h-screen bg-[#050816] pt-20">
        <section className="mx-auto max-w-7xl px-6">
          <div className="p-6 text-gray-400">Loading...</div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050816] pt-20">
      <section className="mx-auto max-w-7xl px-6">

        <div className="mb-6">
          <h1 className="text-3xl font-bold text-white">
            Payments
          </h1>

          <p className="mt-1 text-sm text-gray-400">
            Latest payments sent by PRL Forge.
          </p>
        </div>

        <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5">

          <table className="w-full">

            <thead className="border-b border-white/10">

              <tr>
                <th className="p-4 text-left text-sm">TxID</th>
                <th className="p-4 text-left text-sm">Address</th>
                <th className="p-4 text-left text-sm">Amount</th>
                <th className="p-4 text-left text-sm">Time</th>
                <th className="p-4 text-left text-sm">Status</th>
              </tr>

            </thead>

            <tbody>

              {payments?.map((payment: any) => (

                <tr
                  key={payment.txid}
                  className="border-b border-white/5 transition hover:bg-white/5"
                >
                  <td className="p-4 font-mono text-sm">
                    {payment.txid}
                  </td>

                  <td className="p-4">
                    {payment.address}
                  </td>

                  <td className="p-4 font-semibold">
                    {payment.amount}
                  </td>

                  <td className="p-4">
                    {payment.timestamp}
                  </td>

                  <td className="p-4">
                    <span className="rounded-full bg-green-500/15 px-2.5 py-1 text-xs font-semibold text-green-400">
                      {payment.status}
                    </span>
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </section>
    </main>
  );
}