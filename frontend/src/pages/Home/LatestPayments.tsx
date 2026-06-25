const payments = [
  {
    address: "PRL1...A8F2",
    amount: "125 PRL",
    time: "5 min ago",
  },
  {
    address: "PRL1...C7D1",
    amount: "42 PRL",
    time: "18 min ago",
  },
  {
    address: "PRL1...X9K4",
    amount: "310 PRL",
    time: "1 hour ago",
  },
];

export default function LatestPayments() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-8">
        <h2 className="text-4xl font-bold">Latest Payments</h2>
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
        <table className="w-full">
          <thead className="border-b border-white/10">
            <tr>
              <th className="p-5 text-left">Wallet</th>
              <th className="p-5 text-left">Amount</th>
              <th className="p-5 text-left">Time</th>
            </tr>
          </thead>

          <tbody>
            {payments.map((payment) => (
              <tr
                key={payment.address + payment.time}
                className="border-b border-white/5 hover:bg-white/5"
              >
                <td className="p-5">{payment.address}</td>
                <td className="p-5 text-green-400 font-semibold">
                  {payment.amount}
                </td>
                <td className="p-5 text-gray-400">{payment.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}