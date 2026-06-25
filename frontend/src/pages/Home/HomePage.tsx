import Hero from "./Hero";
import StatsGrid from "./StatsGrid";
import LatestBlocks from "./LatestBlocks";
import LatestPayments from "./LatestPayments";
import TopMiners from "./TopMiners";
import NetworkOverview from "./NetworkOverview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsGrid />
      <LatestBlocks />
      <LatestPayments />
      <TopMiners />
      <NetworkOverview />
    </>
  );
}