import { ReactNode } from "react";

interface InfoRowProps {
  label: string;
  value: ReactNode;
  border?: boolean;
}

export default function InfoRow({
  label,
  value,
  border = true,
}: InfoRowProps) {
  return (
    <div
      className={`flex items-center justify-between ${
        border ? "border-b border-white/5 pb-3" : ""
      }`}
    >
      <span className="text-gray-400">
        {label}
      </span>

      <span className="font-semibold text-white">
        {value}
      </span>
    </div>
  );
}