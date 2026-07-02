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
    hashrate: number;
  };

  template: {
    height: number;
    bits: string;
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