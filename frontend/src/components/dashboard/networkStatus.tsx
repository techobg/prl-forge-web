import Card from "../ui/Card";
import { useStats } from "../../hooks/useStats";

export default function networkStatus() {
  const { data } = useStats();

  if (!data) return null;

  return (
    <Card className="p-6">
      <h2 className="mb-6 text-2xl font-bold">
        Network Status
      </h2>

      <div className="grid gap-6 md:grid-cols-3">

        <div>
          <p className="text-sm text-gray-500">
            Network Height
          </p>

          <p className="mt-2 text-3xl font-bold">
            {data.networkHeight}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Difficulty
          </p>

          <p className="mt-2 text-3xl font-bold">
            {data.difficulty}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            PRL Price
          </p>

          <p className="mt-2 text-3xl font-bold text-green-400">
            ${data.price}
          </p>
        </div>

      </div>
    </Card>
  );
}