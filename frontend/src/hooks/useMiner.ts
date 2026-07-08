import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useMiner(wallet?: string) {
  return useQuery({
    queryKey: ["miner", wallet],
    enabled: !!wallet,
    queryFn: async () => {
      const { data } = await axios.get(
        `http://localhost:8081/api/miner?wallet=${encodeURIComponent(wallet!)}`
      );

      return data;
    },
  });
}