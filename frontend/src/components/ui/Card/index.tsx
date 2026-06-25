import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`
        rounded-2xl
        border
        border-white/10
        bg-white/5
        backdrop-blur
        shadow-lg
        transition
        hover:border-indigo-500/40
        hover:shadow-indigo-500/10
        ${className}
      `}
    >
      {children}
    </div>
  );
}