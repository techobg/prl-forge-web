import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-12 h-56 w-56 -translate-x-1/2 rounded-full bg-indigo-600/20 blur-3xl" />

      <div className="relative mx-auto flex min-h-[24vh] max-w-7xl items-center justify-between gap-6 px-6 py-0">
        {/* Left */}
        <div className="max-w-xl">
          <span className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300">
            Pearl Mining Pool
          </span>

          <h1 className="mt-2 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Mine Pearl with
            <br />
            <span className="text-white">confidence.</span>
          </h1>

          <p className="mt-2 max-w-lg text-base leading-7 text-gray-400">
            Real-time statistics for the Pearl blockchain and the PRL Forge
            mining pool.
          </p>

          <div className="mt-4">
            <Link
              to="/start-mining"
              className="inline-flex rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-indigo-500"
            >
              Start Mining
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className="hidden flex-1 justify-center lg:flex">
          <img
            src="/logo.png"
            alt="PRL Forge"
            className="w-[290px] h-auto drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}