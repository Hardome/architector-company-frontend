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
  variable: '--font-cormorant',
  preload: true,
  display: 'swap'
});

const houschkaPro = localFont({
  src: [{
    path: './fonts/HouschkaPro-Light.woff2',
    weight: '500',
    style: 'normal'
  }],
  variable: '--font-houschka',
  preload: true
});

export const metadata: Metadata = {
  title: 'ELLORIA - Жилой посёлок в Тюмени',
  description: 'ELLORIA - это посёлок с уникальной архитектурой и инфраструктурой для комфортного проживания',
  keywords: ['ELLORIA', 'ЖК', 'Тюмень', 'Посёлок', 'Купить дом', 'Продажа домов', 'Дома', 'Архитектура', 'Инфраструктура', 'Комфортное проживание'],
  openGraph: {
    title: 'ELLORIA - Жилой посёлок в Тюмени',
    description: 'ELLORIA - это посёлок с уникальной архитектурой и инфраструктурой для комфортного проживания',
    url: 'https://elloria.ru/',
    siteName: 'ELLORIA - Жилой посёлок в Тюмени',
    // images: [
    //   {
    //     url: 'https://elloria.ru/architecture.png',
    //     width: 1200,
    //     height: 630,
    //     alt: 'Изображение для соцсетей'
    //   }
    // ],
    locale: 'ru_RU',
    type: 'website',
    countryName: 'Россия'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={'ru'}>
      <body className={`${cormorant.variable} ${houschkaPro.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
