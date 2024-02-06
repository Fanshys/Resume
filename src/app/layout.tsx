import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Header } from "@features/Header";
import { ComponentWithChildren } from "@type";
import { AppContextProvider } from "@contexts/AppContext/AppContext";
import "@styles/index.scss";

const montserrat = Montserrat({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Дмитрий Шабалин",
  description: "",
};

export default function RootLayout({ children }: ComponentWithChildren) {

  return (
    <AppContextProvider>
      <html lang="ru" className={montserrat.className}>
        <body>
          <Header />

          <main className="container">
            {children}
          </main>
        </body>
      </html>
    </AppContextProvider>
  );
}
