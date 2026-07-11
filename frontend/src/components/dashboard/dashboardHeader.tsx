import { useEffect, useState } from "react";

export default function DashboardHeader() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString("bg-BG", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );

    update();

    const timer = setInterval(update, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="mx-auto mb-4 max-w-7xl px-6">
      <div className="flex flex-col justify-between gap-3 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur lg:flex-row lg:items-center">
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-indigo-400">
            PRL Forge
          </p>

          <h1 className="mt-1 text-3xl font-bold">
            Dashboard
          </h1>

          <p className="mt-1 text-sm text-gray-400">
            Welcome back. Monitor your mining pool in real time.
          </p>
        </div>

        <div className="text-left lg:text-right">
          <div className="flex items-center gap-2 lg:justify-end">
            <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />

            <span className="text-sm font-medium text-green-400">
              Pool Online
            </span>
          </div>

          <p className="mt-1 text-xl font-bold">
            {time}
          </p>

          <p className="text-xs text-gray-500">
            Last Update
          </p>
        </div>
      </div>
    </section>
  );
}