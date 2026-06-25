import StatusBadge from "../ui/StatusBadge";
import Card from "../ui/Card";

export default function PoolStatus() {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between">

        <div>
          <h2 className="text-2xl font-bold">
            Pool Status
          </h2>

          <p className="mt-2 text-gray-400">
            PRL Forge pool is running normally.
          </p>
        </div>

        <StatusBadge status="online" />

      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">

        <div>
          <p className="text-sm text-gray-500">
            Pool Fee
          </p>

          <p className="mt-2 text-3xl font-bold">
            0.5%
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Network
          </p>

          <p className="mt-2 text-3xl font-bold">
            Pearl
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            API Status
          </p>

          <p className="mt-2 text-3xl font-bold text-green-400">
            Online
          </p>
        </div>

      </div>
    </Card>
  );
}