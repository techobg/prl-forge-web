import Card from "../ui/Card";
import { useDashboard } from "../../hooks/useDashboard";
import { usePearlPrice } from "../../hooks/usePearlPrice";

export default function NetworkStatus() {
  const { data } = useDashboard();
  const { data: price } = usePearlPrice();

  if (!data) return null;

  return (
    <Card className="p-5">
      <h2 className="mb-4 text-xl font-bold">
        Network Status
      </h2>

      <div className="grid gap-4 md:grid-cols-3">

        <div>
          <p className="text-xs text-gray-500">
            Network Height
          </p>

          <p className="mt-1 text-2xl font-bold">
            {data.network.height}
          </p>
        </div>

        <div>
          <p className="text-xs text-gray-500">
            Difficulty
          </p>

          <p className="mt-1 text-2xl font-bold">
            {(data.network.difficulty / 1_000_000).toFixed(2)}M
          </p>
        </div>

        <div>
          <p className="text-xs text-gray-500">
            PRL Price
          </p>

          <p className="mt-1 text-2xl font-bold text-green-400">
            ${price?.market_data.current_price.usd?.toFixed(4)}
          </p>
        </div>

      </div>
    </Card>
  );
}