import "./globals.css";
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import CookieBanner from './components/layout/CookieBanner';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>

        <CookieBanner />

        <Header />
        {children}
        <Footer />

      </body>
    </html>
  );
}
