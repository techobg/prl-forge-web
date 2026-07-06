import { useQuery } from "@tanstack/react-query";

export interface DashboardResponse {
  pool: {
    name: string;
    version: string;
    status: string;
  };

  workers: {
    online: number;
  };

  network: {
    height: number;
    difficulty: number;
    networkHashrate: number;
    poolHashrate: number;
  };
round: {
  shares: number;
  work: number;
  luck: number;
};

  reward: {
    baseReward: number;
    txFees: number;
    totalReward: number;
    poolFee: number;
    minerReward: number;
  };

}

async function fetchDashboard(): Promise<DashboardResponse> {
  const res = await fetch("http://localhost:8080/api/v1/dashboard");

  if (!res.ok) {
    throw new Error("Failed to load dashboard");
  }

  return res.json();
}

export function useDashboard() {
  return useQuery({
    queryKey: ["dashboard"],
    queryFn: fetchDashboard,
    refetchInterval: 5000,
  });
}