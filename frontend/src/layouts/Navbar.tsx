import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Dashboard", to: "/dashboard" },
  { label: "Explorer", to: "/explorer" },
  { label: "Blocks", to: "/blocks" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <NavLink
          to="/"
          className="text-2xl font-bold tracking-tight"
        >
          PRL <span className="text-indigo-500">Forge</span>
        </NavLink>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-indigo-400"
                  : "text-gray-300 transition hover:text-white"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <>
  <NavLink
    to="/login"
    className="hidden rounded-lg bg-indigo-600 px-5 py-2 font-semibold transition hover:bg-indigo-500 md:block"
  >
    Login
  </NavLink>

  <button
    onClick={() => setOpen(!open)}
    className="text-white md:hidden"
  >
    {open ? <X size={28} /> : <Menu size={28} />}
  </button>
</>
      </div>

      {open && (
  <nav className="border-t border-white/10 bg-[#050816] md:hidden">
    {navItems.map((item) => (
      <NavLink
        key={item.to}
        to={item.to}
        onClick={() => setOpen(false)}
        className="block px-6 py-4 text-gray-300 hover:bg-white/5 hover:text-white"
      >
        {item.label}
      </NavLink>
    ))}

    <NavLink
      to="/login"
      onClick={() => setOpen(false)}
      className="block border-t border-white/10 px-6 py-4 font-semibold text-indigo-400"
    >
      Login
    </NavLink>
  </nav>
)}
    </header>
  );
}