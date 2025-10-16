import TopHeader from "@/components/layouts/TopHeader";
import "./globals.css";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <TopHeader/>
        </header>
        <main>{children}
        </main>
        <footer>
          <Footer/>
        </footer>
      </body>
    </html>
  );
}