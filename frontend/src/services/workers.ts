import api from "./api";

export async function getWorkers() {
  const { data } = await api.get("/v1/workers");
  return data;
}