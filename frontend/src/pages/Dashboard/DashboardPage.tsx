import PoolStatus from "../../components/dashboard/PoolStatus";
import NetworkStatus from "../../components/dashboard/NetworkStatus";
import StatsOverview from "../../components/dashboard/StatsOverview";
import RecentBlocks from "../../components/dashboard/RecentBlocks";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#050816] pt-24">

      <section className="mx-auto max-w-7xl px-6">

        <h1 className="mb-2 text-5xl font-bold">
          Dashboard
        </h1>

        <p className="mb-10 text-gray-400">
          Monitor your PRL Forge mining pool in real time.
        </p>

      </section>

      <section className="mx-auto mb-8 max-w-7xl px-6">
        <PoolStatus />
      </section>

      <section className="mx-auto mb-8 max-w-7xl px-6">
        <NetworkStatus />
      </section>

      <section className="mx-auto mb-8 max-w-7xl px-6">
        <StatsOverview />
      </section>

      <section className="mx-auto mb-12 max-w-7xl px-6">
        <RecentBlocks />
      </section>

    </main>
  );
}