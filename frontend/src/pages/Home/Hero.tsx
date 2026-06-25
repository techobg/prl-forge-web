import Button from "../../components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute left-1/2 top-32 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-600/20 blur-3xl" />

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl items-center px-6">

        <div className="max-w-3xl">

          <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">
            Enterprise Pearl Mining Pool
          </span>

          <h1 className="mt-8 text-6xl font-extrabold leading-tight md:text-7xl">
            Mine Pearl with
            <span className="block text-indigo-500">
              PRL Forge
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-8 text-gray-400">
            High performance mining pool with live statistics,
            enterprise infrastructure and instant payouts.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button>
              Start Mining
            </Button>

            <Button variant="secondary">
              Dashboard
            </Button>
          </div>

        </div>

        {/* Right side */}
        <div className="hidden flex-1 justify-center lg:flex">

          <div className="flex h-96 w-96 items-center justify-center rounded-full border border-indigo-500/20 bg-gradient-to-br from-indigo-500/20 to-cyan-500/10 backdrop-blur-xl">

            <div className="text-center">

              <div className="text-8xl">
                💎
              </div>

              <p className="mt-6 text-lg text-gray-300">
                Pearl Network
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}