'use client'
import { useSearchParams } from 'next/navigation'
import { worksData } from '../data/worksData'

export default function WorksDetailPage() {
  const searchParams = useSearchParams()
  const id = searchParams.get('id')
  const work = worksData.find(w => w.id === id)

  if (!work) return <p className="pt-24 text-center">該当する作品が見つかりませんでした。</p>

  return (
    <div className="max-w-3xl mx-auto space-y-4 pt-24">
      <img src={work.thumb} alt={work.title} className="w-full rounded" />
      <h2 className="text-2xl font-bold">{work.title}</h2>
      <p><strong>どんなゲーム？</strong> {work.desc}</p>
      <p><strong>想定プレイ時間：</strong> {work.playtime}</p>
      <p><strong>GitHub (Releasesからビルドファイルをダウンロードできます)：</strong> <a href={work.github} className="text-lime-600 underline" target="_blank" rel="noopener noreferrer">{work.github}</a></p>
      <video controls src={work.video} className="w-full" />
      <p><strong>開発ツール：</strong> {work.tools}</p>
      <p><strong>制作期間：</strong> {work.period}</p>
      <p><strong>押しポイント：</strong> {work.point}</p>
    </div>
  );
}