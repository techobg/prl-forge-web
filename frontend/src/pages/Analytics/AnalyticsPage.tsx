import AnalyticsStatCard from "../../components/analytics/AnalyticsStatCard";
import AnalyticsChart from "../../components/charts/AnalyticsChart";

export default function AnalyticsPage() {
  const networkData = [
  { time: "10:00", value: 13.2 },
  { time: "11:00", value: 13.5 },
  { time: "12:00", value: 14.1 },
  { time: "13:00", value: 14.4 },
  { time: "14:00", value: 14.8 },
  { time: "15:00", value: 14.6 },
  { time: "16:00", value: 15.1 },
];

const difficultyData = [
  { time: "10:00", value: 18.0 },
  { time: "11:00", value: 18.1 },
  { time: "12:00", value: 18.2 },
  { time: "13:00", value: 18.3 },
  { time: "14:00", value: 18.4 },
  { time: "15:00", value: 18.5 },
  { time: "16:00", value: 18.6 },
];

const poolData = [
  { time: "10:00", value: 2.10 },
  { time: "11:00", value: 2.18 },
  { time: "12:00", value: 2.24 },
  { time: "13:00", value: 2.30 },
  { time: "14:00", value: 2.41 },
  { time: "15:00", value: 2.36 },
  { time: "16:00", value: 2.45 },
];

const workersData = [
  { time: "10:00", value: 172 },
  { time: "11:00", value: 175 },
  { time: "12:00", value: 178 },
  { time: "13:00", value: 180 },
  { time: "14:00", value: 183 },
  { time: "15:00", value: 182 },
  { time: "16:00", value: 185 },
];
  return (
    <main className="min-h-screen bg-[#050816] pt-24">

      <section className="mx-auto max-w-7xl px-6">

        <h1 className="text-5xl font-bold">
          Analytics
        </h1>

        <p className="mt-3 text-gray-400">
          Real-time network, pool and mining statistics.
        </p>

      </section>

      <section className="mx-auto mt-10 grid max-w-7xl gap-6 px-6 md:grid-cols-2 xl:grid-cols-4">

        <AnalyticsStatCard
  title="Network Hashrate"
  value="14.82 TH/s"
  subtitle="+2.4% Today"
/>

<AnalyticsStatCard
  title="Pool Hashrate"
  value="2.41 TH/s"
  subtitle="+1.1% Today"
/>

<AnalyticsStatCard
  title="Network Difficulty"
  value="18.42 P"
  subtitle="Current"
/>

<AnalyticsStatCard
  title="Workers Online"
  value="183"
  subtitle="+12 Today"
/>
      </section>

     <section className="mx-auto mt-8 grid max-w-7xl gap-8 px-6 xl:grid-cols-2">

  <AnalyticsChart
    title="Network Difficulty"
    data={difficultyData}
    
  />

  <AnalyticsChart
    title="Network Hashrate"
    data={networkData}
  />



      </section>
<section className="mx-auto mt-8 grid max-w-7xl gap-8 px-6 xl:grid-cols-2">

  <AnalyticsChart
    title="Pool Hashrate"
    data={poolData}
  />

  <AnalyticsChart
    title="Workers Online"
    data={workersData}
  />

</section>

    </main>
  );
}