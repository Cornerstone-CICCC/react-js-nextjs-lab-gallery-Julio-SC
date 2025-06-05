'use client';

import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="z-50 bg-slate-900 text-white p-4 flex justify-between">
      <Link href="/" className="hover:text-blue-400">Home</Link>
      <Link href="/gallery" className="hover:text-blue-400">Gallery</Link>
    </nav>
  );
}
