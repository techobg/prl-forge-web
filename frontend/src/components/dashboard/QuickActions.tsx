import { useNavigate } from "react-router-dom";
import {
  Search,
  Wallet,
  Cpu,
  BarChart3,
} from "lucide-react";

const actions = [
  {
    title: "Explorer",
    description: "Browse latest blocks",
    icon: Search,
    to: "/explorer",
  },
  {
    title: "Payments",
    description: "View pool payouts",
    icon: Wallet,
    to: "/payments",
  },
  {
    title: "Workers",
    description: "Monitor miners",
    icon: Cpu,
    to: "/workers",
  },
  {
    title: "Statistics",
    description: "Pool overview",
    icon: BarChart3,
    to: "/dashboard",
  },
];

export default function QuickActions() {
  const navigate = useNavigate();

  return (
    <section className="mx-auto mb-8 max-w-7xl px-6">

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <div
              key={action.title}
              onClick={() => navigate(action.to)}
              className="group cursor-pointer rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500 hover:bg-indigo-500/10 hover:shadow-xl hover:shadow-indigo-500/10"
            >

              <Icon className="h-10 w-10 text-indigo-400 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"/>

              <h3 className="mt-5 text-xl font-bold">
                {action.title}
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                {action.description}
              </p>

              <span className="mt-6 inline-block text-indigo-400 transition group-hover:translate-x-1">
                Open →
              </span>

            </div>
          );
        })}

      </div>

    </section>
  );
}