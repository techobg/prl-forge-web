import Button from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";
import { useDashboard } from "../../hooks/useDashboard";
import { usePearlPrice } from "../../hooks/usePearlPrice";

export default function Hero() {
  const { data } = useDashboard();
  console.log("Dashboard:", data);
  const { data: price } = usePearlPrice();
  const navigate = useNavigate();

  const change = price?.market_data.price_change_percentage_24h;

  function formatHashrate(hs: number) {
    const units = ["H/s", "KH/s", "MH/s", "GH/s", "TH/s", "PH/s"];

    let value = hs;
    let unit = 0;

    while (value >= 1000 && unit < units.length - 1) {
      value /= 1000;
      unit++;
    }

    return `${value.toFixed(2)} ${units[unit]}`;
  }

  return (
    <section className="relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute left-1/2 top-32 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-600/20 blur-3xl" />

      <div className="relative mx-auto flex min-h-[70vh] max-w-7xl items-center px-6 py-10 lg:py-0">
        <div className="max-w-3xl">
          <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">
            Enterprise Pearl Mining Pool
          </span>

          <h1 className="mt-8 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Mine Pearl with
            <span className="block text-indigo-500">
              PRL Forge
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg md:text-xl">
            High performance mining pool with live statistics,
            enterprise infrastructure and instant payouts.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button onClick={() => navigate("/workers")}>
              Start Mining
            </Button>

            <Button onClick={() => navigate("/dashboard")}>
              Dashboard
            </Button>
          </div>

          {/* Live Cards */}
          <div className="mt-10 grid max-w-4xl grid-cols-2 gap-4 lg:grid-cols-4">

            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs uppercase text-gray-400">
                Height
              </p>

              <h3 className="mt-2 text-2xl font-bold text-indigo-400">
                {data?.network.height ?? "--"}
              </h3>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs uppercase text-gray-400">
                Pool Hashrate
              </p>

              <h3 className="mt-2 text-2xl font-bold text-indigo-400">
                {formatHashrate(data?.network.hashrate ?? 0)}
              </h3>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs uppercase text-gray-400">
                Workers
              </p>

              <h3 className="mt-2 text-2xl font-bold text-indigo-400">
                {data?.workers.online ?? 0}
              </h3>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs uppercase text-gray-400">
                PRL Price
              </p>

              <h3 className="mt-2 text-2xl font-bold text-green-400">
                $
                {price?.market_data.current_price.usd?.toFixed(4) ?? "--"}
              </h3>

              <p
                className={`mt-2 text-sm font-semibold ${
                  (change ?? 0) >= 0
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {(change ?? 0) >= 0 ? "▲" : "▼"}{" "}
                {change?.toFixed(2) ?? "--"}%
              </p>
            </div>

          </div>
        </div>

        {/* Right side */}
        <div className="hidden flex-1 justify-center lg:flex">
          <div className="flex h-72 w-72 items-center justify-center rounded-full border border-indigo-500/20 bg-gradient-to-br from-indigo-500/20 to-cyan-500/10 backdrop-blur-xl">
            <div className="text-center">
              <div className="text-5xl">
                💎
              </div>

              <p className="mt-6 text-lg text-gray-300">
                Pearl Network
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}