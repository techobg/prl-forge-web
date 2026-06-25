type StatusBadgeProps = {
  status: "online" | "offline" | "syncing";
};

const styles = {
  online: "bg-green-500/20 text-green-400 border-green-500/30",
  offline: "bg-red-500/20 text-red-400 border-red-500/30",
  syncing: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
};

const labels = {
  online: "ONLINE",
  offline: "OFFLINE",
  syncing: "SYNCING",
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={`rounded-full border px-3 py-1 text-xs font-bold tracking-wider ${styles[status]}`}
    >
      ● {labels[status]}
    </span>
  );
}