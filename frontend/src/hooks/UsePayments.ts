import { useQuery } from "@tanstack/react-query";
import { getPayments } from "../services/payments";

export function usePayments() {
  return useQuery({
    queryKey: ["payments"],
    queryFn: getPayments,
    refetchInterval: 5000,
  });
}