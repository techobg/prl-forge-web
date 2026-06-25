import { ButtonHTMLAttributes } from "react";

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
      "border border-white/10 bg-white/5 backdrop-blur hover:border-indigo-500 hover:bg-white/10",
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