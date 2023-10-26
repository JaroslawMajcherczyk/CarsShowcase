import "./globals.css";

import { Footer, NavBar } from "@components";

export const metadata = {
  title: "Car Hub",
  description: "Odkryj najlepszą na świecie aplikację do prezentacji samochodów",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='pl'>
      <body className='relative'>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
