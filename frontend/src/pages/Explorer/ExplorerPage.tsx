import SearchBar from "../../components/explorer/SearchBar";
import BlockTable from "../../components/explorer/BlockTable";

export default function ExplorerPage() {
  return (
    <main className="min-h-screen bg-[#050816] pt-24">

      <section className="mx-auto max-w-7xl px-6">

        <h1 className="text-5xl font-bold">
          Explorer
        </h1>

        <p className="mt-3 mb-10 text-gray-400">
          Search blocks, transactions and wallet addresses.
        </p>

        <SearchBar />

        <BlockTable />

      </section>

    </main>
  );
}