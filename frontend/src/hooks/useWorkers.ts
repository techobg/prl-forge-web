import { useQuery } from "@tanstack/react-query";
import { getWorkers } from "../services/workers";

export function useWorkers() {
  return useQuery({
    queryKey: ["workers"],
    queryFn: getWorkers,
    refetchInterval: 5000,
  });
}