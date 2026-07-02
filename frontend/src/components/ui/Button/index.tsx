import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export default function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base =
    "rounded-xl px-8 py-4 text-lg font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-indigo-600 hover:bg-indigo-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(99,102,241,.45)]",

    secondary:
  "border border-slate-600 bg-slate-800/60 text-white backdrop-blur hover:border-indigo-500 hover:bg-indigo-600/20 hover:text-indigo-200 hover:shadow-xl hover:shadow-indigo-500/20 hover:scale-105",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}