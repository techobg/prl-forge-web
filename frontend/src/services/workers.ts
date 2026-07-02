import axios from "axios";

export async function getWorkers() {
  const { data } = await axios.get("http://localhost:8080/api/workers");
  return data;
}