import DashboardHeader from "../../components/dashboard/dashboardHeader";
import QuickActions from "../../components/dashboard/quickActions";
import PoolStatus from "../../components/dashboard/poolStatus";
import NetworkStatus from "../../components/dashboard/networkStatus";
import StatsOverview from "../../components/dashboard/statsOverview";
import RecentBlocks from "../../components/dashboard/recentBlocks";
import PoolHashrateChart from "../../components/dashboard/PoolHashrateChart";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#050816] pt-20">

      <DashboardHeader />

      <section className="mx-auto mb-6 max-w-7xl px-6">
        <StatsOverview />
      </section>

      <section className="mx-auto mb-6 max-w-7xl px-6">
        <PoolHashrateChart
          title="Pool Hashrate"
          endpoint="/api/v1/history/pool"
        />
      </section>

      <section className="mx-auto mb-6 grid max-w-7xl gap-6 px-6 lg:grid-cols-2">
        <PoolStatus />
        <NetworkStatus />
      </section>

      <section className="mx-auto mb-6 max-w-7xl px-6">
        <RecentBlocks />
      </section>

      <QuickActions />

    </main>
  );
}