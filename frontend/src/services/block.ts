import api from "./api";

export async function getBlock(height: string | number) {
  const { data } = await api.get(`/block?height=${height}`);
  return data;
}