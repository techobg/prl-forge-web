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
  const { data } = await api.get("/v1/dashboard");

  return {
    poolHashrate: data.network.poolHashrate.toString(),
    miners: data.workers.online,
    workers: data.workers.online,
    networkHeight: data.network.height,
    difficulty: data.network.difficulty.toString(),
    poolLuck: data.round.luck,
    poolFee: 1.5,
    price: 0,
  };
}