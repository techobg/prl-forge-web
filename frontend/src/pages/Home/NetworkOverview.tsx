import {
  Activity,
  Blocks,
  Cpu,
  Globe,
  Shield,
  Timer,
} from "lucide-react";

const network = [
  {
    title: "Network Height",
    value: "76123",
    icon: <Blocks size={28} />,
  },
  {
    title: "Difficulty",
    value: "1.42 P",
    icon: <Activity size={28} />,
  },
  {
    title: "Connected Nodes",
    value: "48",
    icon: <Globe size={28} />,
  },
  {
    title: "Block Time",
    value: "30 sec",
    icon: <Timer size={28} />,
  },
  {
    title: "Block Reward",
    value: "25 PRL",
    icon: <Shield size={28} />,
  },
  {
    title: "Pool Fee",
    value: "0.5%",
    icon: <Cpu size={28} />,
  },
];

export default function NetworkOverview() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">

      <h2 className="mb-8 text-4xl font-bold">
        Network Overview
      </h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {network.map((item) => (

          <div
            key={item.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:border-indigo-500 hover:shadow-[0_0_35px_rgba(99,102,241,.25)]"
          >

            <div className="mb-6 text-indigo-400">
              {item.icon}
            </div>

            <p className="text-gray-400">
              {item.title}
            </p>

            <h3 className="mt-3 text-4xl font-bold">
              {item.value}
            </h3>

          </div>

        ))}

      </div>

    </section>
  );
}