import Card from "../ui/Card";

export default function PoolStatus() {
  return (
    <Card className="p-5">
      <h2 className="text-xl font-bold">
        Pool Information
      </h2>

      <p className="mt-1 text-gray-400">
        ⛏ SOLO Pool
      </p>

      <p className="text-sm text-gray-500">
        Mine solo and receive the full block reward.
      </p>

      <div className="mt-5 grid gap-4 md:grid-cols-2">

        <div>
          <p className="text-xs text-gray-500">
            Pool Fee
          </p>

          <p className="mt-1 text-2xl font-bold">
            1.5%
          </p>
        </div>

        <div>
          <p className="text-xs text-gray-500">
            API Status
          </p>

          <p className="mt-1 flex items-center gap-2 text-2xl font-bold text-green-400">
            <span className="h-2.5 w-2.5 rounded-full bg-green-400 animate-pulse"></span>
            Online
          </p>
        </div>

      </div>
    </Card>
  );
}