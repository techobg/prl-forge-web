import SearchBar from "../../components/explorer/SearchBar";
import BlockTable from "../../components/explorer/BlockTable";

export default function ExplorerPage() {
  return (
    <main className="min-h-screen bg-[#050816] pt-20">

      <section className="mx-auto max-w-7xl px-6">

        <h1 className="text-3xl font-bold">
          Explorer
        </h1>

        <p className="mt-2 mb-6 text-sm text-gray-400">
          Search blocks, transactions and wallet addresses.
        </p>

        <SearchBar />

        <div className="mt-5">
          <BlockTable />
        </div>

      </section>

    </main>
  );
}