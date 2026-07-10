import { useQuery } from "@tanstack/react-query";

export interface PoolHistoryPoint {
  time: string;
  hashrate: number;
}

async function fetchPoolHistory(): Promise<PoolHistoryPoint[]> {
  const res = await fetch("http://localhost:8080/api/v1/history/pool");

  if (!res.ok) {
    throw new Error("Failed to load pool history");
  }

  return res.json();
}

export function usePoolHistory() {
  return useQuery({
    queryKey: ["pool-history"],
    queryFn: fetchPoolHistory,
    refetchInterval: 5000,
  });
}