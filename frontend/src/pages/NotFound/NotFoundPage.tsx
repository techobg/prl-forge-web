import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center px-6">

      <div className="text-center">

        <h1 className="text-8xl font-extrabold text-indigo-500">
          404
        </h1>

        <h2 className="mt-6 text-3xl font-bold">
          Page Not Found
        </h2>

        <p className="mt-4 text-gray-400">
          The page you are looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="mt-10 inline-flex rounded-xl bg-indigo-600 px-8 py-4 font-semibold transition hover:bg-indigo-500"
        >
          ← Back Home
        </Link>

      </div>

    </main>
  );
}