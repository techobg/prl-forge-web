import DashboardHeader from "../../components/dashboard/DashboardHeader";
import QuickActions from "../../components/dashboard/QuickActions";

import PoolStatus from "../../components/dashboard/PoolStatus";
import NetworkStatus from "../../components/dashboard/NetworkStatus";
import StatsOverview from "../../components/dashboard/StatsOverview";
import RecentBlocks from "../../components/dashboard/RecentBlocks";
import PoolActivity from "../../components/dashboard/PoolActivity";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#050816] pt-24">

      <DashboardHeader />

      <QuickActions />

      <section className="mx-auto mb-8 max-w-7xl px-6">
        <PoolStatus />
      </section>

      <section className="mx-auto mb-8 max-w-7xl px-6">
        <NetworkStatus />
      </section>

      <section className="mx-auto mb-8 max-w-7xl px-6">
        <StatsOverview />
      </section>

      <section className="mx-auto mb-8 grid max-w-7xl gap-8 px-6 xl:grid-cols-2">
        <RecentBlocks />
        <PoolActivity />
      </section>

    </main>
  );
}