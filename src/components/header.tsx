'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <header className="bg-lime-400 p-4 shadow-md fixed top-0 w-full z-50">
      <nav className="flex justify-between max-w-5xl mx-auto">
        <h1 className="font-bold text-xl text-white">YUGO Portfolio</h1>
        <ul className="flex gap-4 text-white">
          {isHome ? (
            <>
              <li><a href="/">Top</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#works">Works</a></li>
              <li><Link href="#game-review">Review</Link></li>
            </>
          ) : (
            <>
              <li><Link href="/">Top</Link></li>
              <li><Link href="/#about">About</Link></li>
              <li><Link href="/#works">Works</Link></li>
              <li><Link href="/#game-review">Review</Link></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
