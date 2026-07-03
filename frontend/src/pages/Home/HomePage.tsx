import Hero from "./Hero";
import PearlNetwork from "./PearlNetwork";
import BlockReward from "./BlockReward";
import PoolOverview from "./PoolOverview";
import LatestBlock from "./LatestBlock";
import LatestPayment from "./LatestPayment";
import PoolActivity from "./PoolActivity";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="mx-auto mt-8 grid max-w-7xl gap-5 px-6 md:grid-cols-2 xl:grid-cols-3">
        <PearlNetwork />

        <BlockReward />

        <PoolOverview />

        <LatestBlock />

        <LatestPayment />

        <PoolActivity />
      </section>
    </>
  );
}