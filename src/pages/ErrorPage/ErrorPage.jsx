// ErrorPage.jsx

import { isRouteErrorResponse, Link, useRouteError } from "react-router";

export default function ErrorPage() {
  const error = useRouteError();

  let title = "Something went wrong";
  let message = "An unexpected error occurred. Please try again.";

  if (isRouteErrorResponse(error)) {
    title = `${error.status} ${error.statusText}`;
    message =
      error.data?.message ||
      (error.status === 404
        ? "The page you’re looking for doesn’t exist."
        : "We couldn’t load this page.");
  } else if (error instanceof Error) {
    message = error.message;
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-white flex items-center justify-center px-6">
      <section className="max-w-lg w-full text-center">
        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/10 text-red-400">
          <span className="text-3xl">!</span>
        </div>

        <h1 className="text-4xl font-bold tracking-tight mb-3">{title}</h1>

        <p className="text-neutral-400 mb-8">{message}</p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="rounded-xl bg-white text-neutral-950 px-5 py-3 font-medium hover:bg-neutral-200 transition"
          >
            Go home
          </Link>

          <button
            onClick={() => window.location.reload()}
            className="rounded-xl border border-white/15 px-5 py-3 font-medium hover:bg-white/10 transition"
          >
            Reload page
          </button>
        </div>
      </section>
    </main>
  );
}
