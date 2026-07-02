import { useQuery } from "@tanstack/react-query";
import { getPearlPrice } from "../services/coingecko";

export function usePearlPrice() {
  return useQuery({
    queryKey: ["pearl-price"],
    queryFn: getPearlPrice,
    refetchInterval: 30000, // обновяване на всеки 30 секунди
  });
}