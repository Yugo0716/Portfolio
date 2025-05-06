import Link from 'next/link';

export const metadata = {
  title: 'Works',
  description: '制作実績一覧ページ',
};

const projects = [
  { slug: 'project1', title: 'アクションゲーム企画', summary: 'プレイヤー誘導設計' },
  { slug: 'project2', title: 'パズルゲーム企画', summary: 'レベルデザイン' },
];

export default function WorksPage() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Works</h2>
      <ul>
        {projects.map((p) => (
          <li key={p.slug} className="mb-4">
            <Link href={`/works/${p.slug}`} className="text-xl underline">
              {p.title}
            </Link>
            <p>{p.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
