import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useMiner(wallet?: string) {
  return useQuery({
    queryKey: ["miner", wallet],
    enabled: !!wallet,
    queryFn: async () => {
      const { data } = await axios.get(
  `/api/v1/miner?wallet=${encodeURIComponent(wallet!)}`
);

      return data;
    },
  });
}