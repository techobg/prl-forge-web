export async function getPearlPrice() {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/pearl-2"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch Pearl price");
  }

  return res.json();
}