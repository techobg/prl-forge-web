import { useQuery } from "@tanstack/react-query";
import { getBlock } from "../services/block";

export function useBlock(height: string | undefined) {
  return useQuery({
    queryKey: ["block", height],
    queryFn: () => getBlock(height!),
    enabled: !!height,
  });
}