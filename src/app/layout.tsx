import './globals.css';
import Header from 'components/header';
import Footer from 'components/footer';

export const metadata = {
  title: {
    default: 'YUGOのポートフォリオ',
    template: '%s | YUGOのポートフォリオ',
  },
  description: 'ゲームプランナー志望のポートフォリオサイト',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 p-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
