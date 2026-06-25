import { usePayments } from "../../hooks/usePayments";

export default function PaymentsPage() {
  const { data: payments, isLoading } = usePayments();

  if (isLoading) {
    return <div className="p-8 text-white">Loading...</div>;
  }

  return (
    <main className="min-h-screen bg-[#050816] pt-24">
      <section className="mx-auto max-w-7xl px-6">

        <h1 className="mb-8 text-5xl font-bold">
          Payments
        </h1>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">

          <table className="w-full">

            <thead className="border-b border-white/10">

              <tr>
                <th className="p-5 text-left">TxID</th>
                <th className="p-5 text-left">Address</th>
                <th className="p-5 text-left">Amount</th>
                <th className="p-5 text-left">Time</th>
                <th className="p-5 text-left">Status</th>
              </tr>

            </thead>

            <tbody>

              {payments?.map((payment: any) => (

                <tr
                  key={payment.txid}
                  className="border-b border-white/5 hover:bg-white/5"
                >
                  <td className="p-5">{payment.txid}</td>

                  <td className="p-5">{payment.address}</td>

                  <td className="p-5">{payment.amount}</td>

                  <td className="p-5">{payment.timestamp}</td>

                  <td className="p-5">

                    <span className="rounded-full bg-green-500/20 px-3 py-1 text-green-400">
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