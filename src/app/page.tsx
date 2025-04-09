import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold">Leanbase App Site Association</h1>
      <Link href="/.well-known/apple-app-site-association" className="text-blue-500">Leanbase App</Link>
      <Link href="/.well-known/assetlinks.json" className="text-blue-500">Leanbase App</Link>
    </div>
  );
}
