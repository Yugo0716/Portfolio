import Link from 'next/link';

export default function Header() {
  return (
    <header className="p-4 bg-gray-800 text-white flex justify-between">
      <div className="text-xl font-bold">YUGO</div>
      <nav className="space-x-4">
        <Link href="/">トップ</Link>
        <Link href="/about">About</Link>
        <Link href="/works">Works</Link>
        <Link href="/blog">Blog</Link>
      </nav>
    </header>
  );
}
