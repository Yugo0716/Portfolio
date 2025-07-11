import Image from 'next/image'
import { AboutSection } from 'components/about'
import { WorksSection } from 'components/works'
import { FaGithub, FaX, FaXTwitter } from 'react-icons/fa6'
import ReviewSection from 'components/review';

export const revalidate = 60;

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="text-center">
        <Image src="/me.jpg" alt="YUGO" width={300} height={300} className="mx-auto rounded-full" />
        <h1 className="font-bold text-xl md:text-2xl mt-4">菊池勇吾（YUGO/きくっつぁん）のポートフォリオサイト</h1>
      </section>

      <section className="text-center space-y-2">
        <p>はじめまして。菊池勇吾（きくちゆうご）と申します。現在修士1年生（27卒）です。</p>
        <p>このページは私のポートフォリオサイトです。</p>
        <p>私がこれまでに取り組んできたことを知ってもらうために作りました。</p>
        <p>ゲームプランナー/ゲームエンジニア志望です。</p>

        <div className="flex justify-center gap-8 pt-4">
          <a
            href="https://x.com/kysan771166"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-lime-400 rounded hover:bg-lime-100 text-xl"
          >
            <FaXTwitter/>
          </a>
          <a
            href="https://github.com/Yugo0716"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-lime-400 rounded hover:bg-lime-100 text-xl"
          >
            <FaGithub/>
          </a>
        </div>
      </section>


      <AboutSection />
      <WorksSection />
      <ReviewSection />

      <div className="relative -mt-20 pt-24 max-w-5xl mx-auto">
        本ポートフォリオサイトのソースコードは
        <a href="https://github.com/Yugo0716/Portfolio" target="_blank"rel="noopener noreferrer" className="text-lime-600 underline">
          GitHub
          <svg className="inline w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
          </svg>
        </a>
        で確認できます。
      </div>
      
    </div>
  );
}