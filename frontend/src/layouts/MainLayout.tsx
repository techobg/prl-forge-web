import { Menu, X } from "lucide-react";
import { useState } from "react";

import { NavLink, Outlet } from "react-router-dom";
import { useStatus } from "../hooks/useStatus";
import ThemeToggle from "../components/ThemeToggle";

const links = [
  { to: "/", label: "Home" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/analytics", label: "Analytics" },
  { to: "/explorer", label: "Explorer" },
  { to: "/payments", label: "Payments" },
  { to: "/workers", label: "Workers" },
];

export default function MainLayout() {
  const { data: status } = useStatus();
  const [mobileOpen, setMobileOpen] = useState(false);
   return (
    <div
  className="min-h-screen transition-colors duration-500"
  style={{
    background: "var(--bg)",
    color: "var(--text)",
  }}
>
      <div className="fixed inset-0 -z-10 overflow-hidden">

  <div className="absolute left-[-120px] top-[-120px] h-96 w-96 rounded-full bg-indigo-600/10 blur-3xl animate-blob" />

  <div className="absolute right-[-150px] top-40 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-3xl animate-blob animation-delay-2000" />

  <div className="absolute bottom-[-180px] left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl animate-blob animation-delay-4000" />

</div>

      <header
  className="sticky top-0 z-50 border-b backdrop-blur transition-colors duration-500"
  style={{
    background: "var(--bg)",
    borderColor: "var(--border)",
  }}
>
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        <NavLink
  to="/"
  className="text-xl font-bold text-indigo-400 transition duration-300 hover:scale-105 hover:text-indigo-300"
>
  PRL Forge
</NavLink>

          <nav className="hidden items-center gap-6 md:flex">

            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-indigo-400 font-semibold"
                    : "text-gray-400 hover:text-white transition"
                }
              >
                {link.label}
              </NavLink>
            ))}

          </nav>

          <button
  onClick={() => setMobileOpen(!mobileOpen)}
  className="md:hidden"
>
  {mobileOpen ? <X size={28} /> : <Menu size={28} />}
</button>

          <div className="flex items-center gap-3">
<ThemeToggle />
  <div
    className={`h-2 w-2 rounded-full ${
      status?.online ? "bg-green-500" : "bg-red-500"
    }`}
  />

  <div className="flex flex-col leading-none">

    <span
      className={`text-sm font-semibold ${
        status?.online ? "text-green-400" : "text-red-400"
      }`}
    >
      {status?.online ? "Pool Online" : "Pool Offline"}
    </span>

    <span className="text-xs text-gray-500">
      v{status?.version} • Up {status?.uptime}
    </span>

  </div>

</div>

        </div>
      </header>

      <Outlet />

      <footer className="mt-24 border-t border-white/10">

  <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row">

    <div>

      <h3 className="text-lg font-bold text-indigo-400">
        PRL Forge
      </h3>

      <p className="mt-2 text-sm text-gray-500">
        Enterprise Pearl Mining Pool
      </p>

    </div>

    <div className="flex items-center gap-8 text-sm">

      <NavLink
        to="/dashboard"
        className="text-gray-400 transition hover:text-white"
      >
        Dashboard
      </NavLink>

      <NavLink
        to="/explorer"
        className="text-gray-400 transition hover:text-white"
      >
        Explorer
      </NavLink>

      <NavLink
        to="/payments"
        className="text-gray-400 transition hover:text-white"
      >
        Payments
      </NavLink>

      <NavLink
        to="/workers"
        className="text-gray-400 transition hover:text-white"
      >
        Workers
      </NavLink>

    </div>

    <div className="text-right">

      <p className="text-sm text-gray-500">
        Version {status?.version}
      </p>

      <p className="text-xs text-gray-600">
        © 2026 PRL Forge
      </p>

      
  <NavLink
  to="/aya"
  className="group mt-4 flex items-center justify-end gap-2 text-xs text-gray-500 transition-all duration-300 hover:text-indigo-300"
>

  <span className="text-lg transition-transform duration-300 group-hover:scale-125">
    🐾
  </span>

  <span className="group-hover:underline">
    Inspired by Aya.
  </span>
</NavLink>

    </div>

  </div>

</footer>

    </div>
  );
}