import { NavLink, Outlet } from "react-router-dom";
import { useStatus } from "../hooks/useStatus";

const links = [
  { to: "/", label: "Home" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/explorer", label: "Explorer" },
  { to: "/payments", label: "Payments" },
  { to: "/workers", label: "Workers" },
];

export default function MainLayout() {
  const { data: status } = useStatus();
   return (
    <div className="min-h-screen bg-[#09090B] text-white">

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#09090B]/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

          <NavLink
            to="/"
            className="text-xl font-bold text-indigo-400"
          >
            PRL Forge
          </NavLink>

          <nav className="flex items-center gap-6">

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

          <div className="flex items-center gap-3">

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

    </div>
  );
}