import type {Metadata} from 'next';
import {Roboto} from 'next/font/google';

import './globals.css';

import Header from '@/components/Header';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin', 'cyrillic'],
  variable: '--font-roboto'
});

export const metadata: Metadata = {
  title: 'СК Архитектор',
  description: 'Строительная компания Архитектор'
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
      </body>
    </html>
  );
}
