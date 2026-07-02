export function formatHashrate(hashrate: number): string {
  if (!hashrate || hashrate <= 0) {
    return "0 H/s";
  }

  const units = ["H/s", "KH/s", "MH/s", "GH/s", "TH/s", "PH/s", "EH/s"];

  let value = hashrate;
  let unit = 0;

  while (value >= 1000 && unit < units.length - 1) {
    value /= 1000;
    unit++;
  }

  return `${value.toFixed(2)} ${units[unit]}`;
}