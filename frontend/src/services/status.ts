import api from "./api";

export async function getStatus() {
  const { data } = await api.get("/status");
  return data;
}