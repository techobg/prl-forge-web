const miners = [
  {
    rank: 1,
    address: "PRL1...8A4F",
    hashrate: "512 GH/s",
    shares: "12,842",
  },
  {
    rank: 2,
    address: "PRL1...91CD",
    hashrate: "388 GH/s",
    shares: "10,125",
  },
  {
    rank: 3,
    address: "PRL1...44EF",
    hashrate: "276 GH/s",
    shares: "8,741",
  },
  {
    rank: 4,
    address: "PRL1...72AA",
    hashrate: "210 GH/s",
    shares: "6,213",
  },
  {
    rank: 5,
    address: "PRL1...11BC",
    hashrate: "195 GH/s",
    shares: "5,802",
  },
];

export default function TopMiners() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">

      <div className="mb-8">
        <h2 className="text-4xl font-bold">
          Top Miners
        </h2>
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">

        <table className="w-full">

          <thead className="border-b border-white/10">

            <tr>

              <th className="p-5 text-left">Rank</th>

              <th className="p-5 text-left">Wallet</th>

              <th className="p-5 text-left">Hashrate</th>

              <th className="p-5 text-left">Shares</th>

            </tr>

          </thead>

          <tbody>

            {miners.map((miner) => (

              <tr
                key={miner.rank}
                className="border-b border-white/5 hover:bg-white/5"
              >

                <td className="p-5 font-bold">
                  #{miner.rank}
                </td>

                <td className="p-5">
                  {miner.address}
                </td>

                <td className="p-5 text-cyan-400">
                  {miner.hashrate}
                </td>

                <td className="p-5">
                  {miner.shares}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </section>
  );
}