import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

type Point = {
  time: string;
  value: number;
};

type Props = {
  title: string;
  data: Point[];
};

export default function AnalyticsChart({
  title,
  data,
}: Props) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-xl font-bold">
          {title}
        </h2>

        <span className="rounded-lg border border-white/10 px-3 py-1 text-xs text-gray-400">
          24 Hours
        </span>

      </div>

      <ResponsiveContainer width="100%" height={280}>

        <LineChart data={data}>

          <CartesianGrid
            stroke="#222"
            vertical={false}
          />

          <XAxis dataKey="time" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="value"
            stroke="#6366F1"
            strokeWidth={3}
            dot={false}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
}