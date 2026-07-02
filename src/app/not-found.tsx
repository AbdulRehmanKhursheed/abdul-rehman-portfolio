import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center">
      <div className="container-custom py-24">
        <p className="eyebrow mb-4">404</p>
        <h1
          className="font-display text-h1 mb-4"
          style={{ color: `rgb(var(--text-primary))` }}
        >
          Page not found.
        </h1>
        <p className="mb-8" style={{ color: `rgb(var(--text-secondary))` }}>
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <Link href="/" className="button-primary">
          Back to home
        </Link>
      </div>
    </main>
  );
}
