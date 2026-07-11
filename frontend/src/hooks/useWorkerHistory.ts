import { useQuery } from "@tanstack/react-query";

export interface HistoryPoint {
  time: string;
  hashrate: number;
}

async function fetchWorkerHistory(wallet: string, worker: string) {
  const res = await fetch(
    `http:///api/v1/history/worker?wallet=${wallet}&worker=${worker}`
  );

  if (!res.ok) {
    throw new Error("Failed to load worker history");
  }

  return res.json();
}

export function useWorkerHistory(wallet: string, worker: string) {
  return useQuery({
    queryKey: ["worker-history", wallet, worker],
    queryFn: () => fetchWorkerHistory(wallet, worker),
    enabled: !!wallet && !!worker,
    refetchInterval: 5000,
  });
}