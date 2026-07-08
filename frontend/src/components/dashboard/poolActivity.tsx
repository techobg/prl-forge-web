import Card from "../ui/Card";


const activity = [
  {
    time: "12:41:02",
    event: "Pool started",
    color: "text-green-400",
  },
  {
    time: "12:41:15",
    event: "API connected",
    color: "text-cyan-400",
  },
  {
    time: "12:41:30",
    event: "Waiting for miners...",
    color: "text-yellow-400",
  },
];

export default function PoolActivity() {
 
  return (
    <Card className="p-6">
      <h2 className="mb-6 text-2xl font-bold">
        Pool Activity
      </h2>

      <div className="space-y-4">

        {activity.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b border-white/5 pb-3"
          >
            <span className="text-gray-500">
              {item.time}
            </span>

            <span className={item.color}>
              {item.event}
            </span>
          </div>
        ))}

      </div>
    </Card>
  );
}