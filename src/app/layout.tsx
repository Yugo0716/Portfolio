import './globals.css'
import {Header} from 'components/header'
import {Footer} from 'components/footer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-lime-50 text-gray-900 font-sans scroll-smooth">
        <Header />
        <main className="min-h-screen px-4 py-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}