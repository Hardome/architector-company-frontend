import type {Metadata} from 'next';
import {Roboto} from 'next/font/google';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

import './globals.css';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin', 'cyrillic'],
  variable: '--font-roboto'
});

export const metadata: Metadata = {
  title: 'ЛесПарк - Жилой посёлок в Тюмени',
  // eslint-disable-next-line max-len
  description: 'ЖК ЛесПарк - это современный посёлок с современными домами и инфраструктурой для комфортного проживания'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={'ru'}>
      <body className={`${roboto.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
