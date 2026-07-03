

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-32 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-600/20 blur-3xl" />

      <div className="relative mx-auto flex min-h-[55vh] max-w-7xl items-center px-6 py-10">

        {/* Left */}
        <div className="max-w-3xl">

          <span className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-300">
            Pearl Mining Pool
          </span>

          <h1 className="mt-8 text-5xl font-black sm:text-6xl lg:text-7xl">
            <span className="text-white">PRL</span>{" "}
            <span className="text-indigo-400">FORGE</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Real-time statistics for the Pearl blockchain and
            PRL Forge mining pool.
          </p>

        </div>

        {/* Right */}
        <div className="hidden flex-1 justify-center lg:flex">

          <div className="flex h-64 w-64 items-center justify-center rounded-full border border-indigo-500/20 bg-gradient-to-br from-indigo-500/20 to-cyan-500/10 backdrop-blur-xl">

            <div className="text-center">

              <div className="text-7xl">
                💎
              </div>

              <p className="mt-6 text-2xl font-semibold text-gray-300">
                Pearl
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}