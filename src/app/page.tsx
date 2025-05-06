export const metadata = {
  description: 'ゲームプランナー志望のポートフォリオサイトトップページ',
};

export default function HomePage() {
  return (
    <div className="text-center space-y-4">
      <h1 className="text-4xl font-bold">ゲームプランナー志望</h1>
      <p>プレイヤー行動を促す仕掛け作りが得意</p>
      <img src="/代表作の画像.jpg" alt="代表作" className="mx-auto w-1/2" />
      <div className="space-x-4">
        <a href="/about" className="underline">Aboutへ</a>
        <a href="/works" className="underline">Worksへ</a>
      </div>
    </div>
  );
}
