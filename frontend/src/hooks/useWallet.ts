import { useQuery } from "@tanstack/react-query";
import { getWallet } from "../services/wallet";

export function useWallet(address: string | undefined) {
  return useQuery({
    queryKey: ["wallet", address],
    queryFn: () => getWallet(address!),
    enabled: !!address,
  });
}