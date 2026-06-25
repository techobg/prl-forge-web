import api from "./api";

export type StatsResponse = {
  poolHashrate: string;
  miners: number;
  workers: number;
  networkHeight: number;
  difficulty: string;
  poolLuck: number;
  poolFee: number;
  price: number;
};

export async function getStats(): Promise<StatsResponse> {
  const { data } = await api.get("/stats");
  return data;
}