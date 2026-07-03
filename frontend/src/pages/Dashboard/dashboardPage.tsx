import DashboardHeader from "../../components/dashboard/dashboardHeader";
import QuickActions from "../../components/dashboard/quickActions";
import PoolStatus from "../../components/dashboard/poolStatus";
import NetworkStatus from "../../components/dashboard/networkStatus";
import StatsOverview from "../../components/dashboard/statsOverview";
import RecentBlocks from "../../components/dashboard/recentBlocks";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#050816] pt-24">

      <DashboardHeader />

      <section className="mx-auto mb-8 max-w-7xl px-6">
        <StatsOverview />
      </section>

      <section className="mx-auto mb-8 grid max-w-7xl gap-8 px-6 lg:grid-cols-2">
        <PoolStatus />
        <NetworkStatus />
      </section>

      <section className="mx-auto mb-8 max-w-7xl px-6">
        <RecentBlocks />
      </section>

      <QuickActions />

    </main>
  );
}