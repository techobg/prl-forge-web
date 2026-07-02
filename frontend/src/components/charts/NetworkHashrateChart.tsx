import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { time: "10:00", value: 13.2 },
  { time: "11:00", value: 13.8 },
  { time: "12:00", value: 14.1 },
  { time: "13:00", value: 14.4 },
  { time: "14:00", value: 14.8 },
  { time: "15:00", value: 14.6 },
  { time: "16:00", value: 15.1 },
];

export default function NetworkHashrateChart() {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <LineChart data={data}>

        <CartesianGrid stroke="#222" />

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
  );
}