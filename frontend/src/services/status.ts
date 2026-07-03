import api from "./api";

export async function getStatus() {
  const { data } = await api.get("/health");
  return data;
}