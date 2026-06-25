import { useQuery } from "@tanstack/react-query";
import { getBlocks } from "../services/blocks";

export function useBlocks() {
  return useQuery({
    queryKey: ["blocks"],
    queryFn: getBlocks,
    refetchInterval: 5000,
  });
}