/* eslint-disable max-len */
import type {Metadata} from 'next';
import {Cormorant_Garamond as Cormorant} from 'next/font/google';
import localFont from 'next/font/local';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

import './globals.css';

const cormorant = Cormorant({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin', 'cyrillic'],
  variable: '--font-cormorant'
});

const houschkaPro = localFont({
  src: [{
    path: './fonts/HouschkaPro-Light.woff2',
    weight: '500',
    style: 'normal'
  }],
  variable: '--font-houschka'
});

export const metadata: Metadata = {
  title: 'ELORIA - Жилой посёлок в Тюмени',
  description: 'ELORIA - это посёлок с уникальной архитектурой и инфраструктурой для комфортного проживания',
  keywords: ['ELORIA', 'ЖК', 'Тюмень', 'Посёлок', 'Купить дом', 'Продажа домов', 'Дома', 'Архитектура', 'Инфраструктура', 'Комфортное проживание'],
  openGraph: {
    title: 'ELORIA - Жилой посёлок в Тюмени',
    description: 'ELORIA - это посёлок с уникальной архитектурой и инфраструктурой для комфортного проживания',
    images: ['/architecture.png']
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={'ru'}>
      <body className={`${cormorant.className} ${houschkaPro.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
