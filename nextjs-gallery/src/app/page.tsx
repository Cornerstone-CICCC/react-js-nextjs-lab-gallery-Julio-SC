import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-white text-center p-4">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">
        This is my Gallery and To dos Website
      </h1>
      <p className="text-lg text-gray-600 mb-6">Created by Julio</p>
      <Link href="/gallery" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition">
        Go to Gallery
      </Link>
    </main>
  );
}
