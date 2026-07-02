import Hero from "./Hero";
import StatsGrid from "./StatsGrid";
import LatestBlocks from "./LatestBlocks";
import LatestPayments from "./LatestPayments";
import TopMiners from "./TopMiners";
import NetworkOverview from "./NetworkOverview";
import Features from "../../components/home/Features";
import HowToMine from "../../components/home/HowToMine";
import LiveNetwork from "../../components/home/LiveNetwork";


export default function HomePage() {
  return (
    <>
  <Hero />

  <LiveNetwork />

  <HowToMine />

  <Features />

  <StatsGrid />

  <NetworkOverview />

  <LatestBlocks />

  <LatestPayments />

  <TopMiners />
</>
  );
}