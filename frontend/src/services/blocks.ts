import api from "./api";

export async function getBlocks() {
    const { data } = await api.get("/blocks");
    return data;
}