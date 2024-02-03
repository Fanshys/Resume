import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Header } from "@features/Header";
import { ComponentWithChildren } from "@type";
import "@styles/globals.scss";

const montserrat = Montserrat({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Портфолио - Дмитрий Шабалин",
  description: "",
};

export default function RootLayout({ children }: ComponentWithChildren) {
  return (
    <html lang="ru" className={montserrat.className}>
      <body>
        <Header />

        <main className='container'>
          {children}
        </main>
      </body>
    </html>
  );
}
