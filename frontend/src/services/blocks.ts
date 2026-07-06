import api from "./api";

export async function getBlocks() {
  const { data } = await api.get("/v1/blocks");
  return data;
}