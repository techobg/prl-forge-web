import { useState } from "react";

type CopyFieldProps = {
  title: string;
  value: string;
  color?: string;
};

export default function CopyField({
  title,
  value,
  color = "text-emerald-400",
}: CopyFieldProps) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(value);

    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <p className="text-sm font-semibold text-gray-300">
          {title}
        </p>

        <button
          onClick={copy}
          className="text-xs text-indigo-400 transition hover:text-indigo-300"
        >
          {copied ? "✅ Copied" : "📋 Copy"}
        </button>
      </div>

      <div className="rounded-xl border border-white/10 bg-black/40 p-4">
        <code className={color}>
          {value}
        </code>
      </div>
    </div>
  );
}