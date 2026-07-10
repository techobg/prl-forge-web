import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Area,
} from "recharts";

import { useQuery } from "@tanstack/react-query";
import { formatHashrate } from "../../utils/hashrate";

type Props = {
  title: string;
  endpoint: string;
};

export default function HashrateChart({
  title,
  endpoint,
}: Props) {
  const { data, isLoading, error } = useQuery({
  queryKey: [endpoint],
  queryFn: async () => {
    const res = await fetch(`http://localhost:8080${endpoint}`);

    if (!res.ok) {
      throw new Error("Failed to load history");
    }

    return res.json();
  },
  refetchInterval: 5000,
});
 console.log("HASHRATE CHART", { isLoading, data, error });
 if (isLoading) {
  return <div>Loading...</div>;
}

if (error) {
  return <div>Error loading chart</div>;
}

if (!data) {
  return <div>No data</div>;
}

  const chartData = data.map((p) => ({
    time: new Date(p.time).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
    hashrate: p.hashrate,
  }));

 

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="mb-6 text-xl font-semibold">
  {title}
</h3>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <defs>
  <linearGradient id="hashrateGradient" x1="0" y1="0" x2="0" y2="1">
    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.35} />
    <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
  </linearGradient>
</defs>
            <CartesianGrid
  vertical={false}
  stroke="#334155"
  strokeDasharray="4 4"
/>

            <XAxis dataKey="time" />

            <YAxis
              tickFormatter={(v) => formatHashrate(v)}
            />

            <Tooltip
  formatter={(value) => [formatHashrate(Number(value ?? 0)), "Hashrate"]}
/>
<Area
  type="natural"
  dataKey="hashrate"
  stroke="none"
  fill="url(#hashrateGradient)"
/>
            <Line
              type="natural"
              dataKey="hashrate"
              stroke="#6366f1"
              strokeWidth={4}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}