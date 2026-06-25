import api from "./api";

export async function getWallet(address: string | number) {
  const { data } = await api.get(`/wallet?address=${address}`);
  return data;
}