import Image from 'next/image'
import { AboutSection } from 'components/about'
import { WorksSection } from 'components/works'

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="text-center">
        <Image src="/me.jpg" alt="YUGO" width={300} height={300} className="mx-auto rounded-full" />
        <h1 className="font-bold text-xl md:text-2xl mt-4">菊池勇吾（YUGO/きくっつぁん）のポートフォリオサイト</h1>
      </section>
      <AboutSection />
      <WorksSection />
    </div>
  );
}