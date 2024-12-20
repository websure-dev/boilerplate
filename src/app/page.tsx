import Link from "next/link";

export default function Home() {
  return (
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
      <h1 className="text-4xl font-bold mb-8">
        Welcome to the Boilerplate App
      </h1>
      <p className="mb-4">This is a simple boilerplate Next.js application.</p>
      <Link href="/api/hello-world" className="text-blue-500 hover:underline">
        Check out the API route
      </Link>
    </div>
  );
}
