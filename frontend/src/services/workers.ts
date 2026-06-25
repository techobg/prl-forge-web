import api from "./api";

export async function getWorkers() {
  const { data } = await api.get("/workers");
  return data;
}