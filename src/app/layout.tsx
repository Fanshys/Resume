import '@styles/index.scss';

import { AppContextProvider } from '@contexts/AppContext';
import { Footer } from '@features/Footer';
import { Header } from '@features/Header';
import type { ComponentWithChildren } from '@type';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { cookies } from 'next/headers';

const montserrat = Montserrat({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Дмитрий Шабалин',
  description: '',
};

export default function RootLayout({ children }: ComponentWithChildren) {
  const themeClassName = cookies().get('theme')?.value || '';

  return (
    <AppContextProvider>
      <html
        lang="ru"
        className={montserrat.className}
      >
        <body className={themeClassName}>
          <Header />

          <main>
            {children}
          </main>

          <Footer />
        </body>
      </html>
    </AppContextProvider>
  );
}
