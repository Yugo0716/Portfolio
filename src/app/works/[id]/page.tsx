'use client'
import { use } from 'react';
import { worksData } from '../../data/worksData';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { useState } from 'react';
import Pagination from 'components/pagination';

export default function WorkDetailPage(promise: { params: Promise<{ id: string }> }) {
  const { id } = use(promise.params);
  const work = worksData.find(w => w.id === id);
  const [index, setIndex] = useState(0);

  if (!work) return notFound();

  const screenshots = work.screenshots || [];
  const prev = () => setIndex((index - 1 + screenshots.length) % screenshots.length);
  const next = () => setIndex((index + 1) % screenshots.length);

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {/* タイトルとアイコン */}
      <div className="flex items-center space-x-4">
        {work.icon && (
          <Image src={work.icon} alt="icon" width={40} height={40} className="rounded" />
        )}
        <h1 className="text-3xl font-bold">{work.title}</h1>
      </div>

      {/* スクリーンショットスライダー */}
      {screenshots.length > 0 && (
        <div className="relative w-full h-full overflow-hidden rounded border">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${index * (100 / screenshots.length)}%)`,
              width: `${screenshots.length * 100}%`,
            }}
          >
            {screenshots.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`screenshot-${i}`}
                className="object-cover flex-shrink-0"
                style={{ width: `${100 / screenshots.length}%` }}
              />
            ))}
          </div>
          <button
            onClick={prev}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-lime-300 text-xl w-10 h-10 rounded-full shadow-md flex items-center justify-center transition-colors"
          >
            ◀
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-lime-300 text-xl w-10 h-10 rounded-full shadow-md flex items-center justify-center transition-colors"
          >
            ▶
          </button>
        </div>
      )}

      <div className="h-4" />

      {/* 概要セクション */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">概要</h2>
        <p><strong>どんなもの？：</strong> {work.desc}</p>
        <p><strong>想定プレイ時間：</strong> {work.playtime}</p>

        {work.github && (
          <p>
            <strong>GitHubリンク (Releasesからビルドファイルをダウンロードできます)：</strong>{' '}
            <a
              href={work.github}
              className="text-lime-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {work.github}
            </a>
          </p>
        )}

        {work.link && (
          <p>
            <strong>ダウンロードページリンク（サークルのホームページに移動します）：</strong>{' '}
            <a
              href={work.link}
              className="text-lime-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {work.link}
            </a>
          </p>
        )}

        {work.unityroom && (
          <p>
            <strong>Unityroomリンク：</strong>{' '}
            <a
              href={work.unityroom}
              className="text-lime-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {work.unityroom}
            </a>
          </p>
        )}

        {work.pdf && (
          <p>
            <strong>企画書：</strong>{' '}
            <a
              href={work.pdf}
              className="text-lime-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {work.pdf}
            </a>
          </p>
        )}

        {work.tools && (
          <p><strong>開発ツール：</strong> {work.tools}</p>
        )}

        {work.video && (
          <>
            <p><strong>プレイ映像：</strong></p>
            <div className="relative w-full pt-[56.25%]">
              <iframe
                src={work.video}
                title="YouTube video player"
                className="absolute top-0 left-0 w-full h-full rounded"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </>
        )}
      </div>

      <div className="h-4" />

      {/* 制作について */}
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">制作について</h2>
        <p><strong>役職：</strong> {work.job}</p>
        <p><strong>制作期間：</strong> {work.period}</p>
        <p><strong>魅力：</strong> {work.point}</p>
      </div>

      <div className="h-4" />

      {/* 制作を振り返って */}
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">制作を振り返って</h2>
        {work.comment && work.comment.trim().split('\n').map((line, i) => (
          <p key={i} className="mb-2">{line}</p>
        ))}
      </div>
      <Pagination
        items={worksData}
        id={id}
        getId={(item) => item.id}
        getTitle={(item) => item.title}
        pathPrefix="/works"
      />
    </div>
  );
}
