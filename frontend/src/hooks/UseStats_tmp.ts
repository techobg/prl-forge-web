import { useQuery } from "@tanstack/react-query";
import { getStats } from "../services/stats";

export function useStats() {
  return useQuery({
    queryKey: ["stats"],
    queryFn: getStats,
    refetchInterval: 5000,
  });
}