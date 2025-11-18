/* eslint-disable max-len */
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
  description: 'ЖК ЛесПарк - это посёлок с уникальной архитектурой и инфраструктурой для комфортного проживания',
  keywords: ['ЛесПарк', 'ЖК', 'Тюмень', 'Посёлок', 'Купить дом', 'Продажа домов', 'Дома', 'Архитектура', 'Инфраструктура', 'Комфортное проживание'],
  openGraph: {
    title: 'ЛесПарк - Жилой посёлок в Тюмени',
    description: 'ЖК ЛесПарк - это посёлок с уникальной архитектурой и инфраструктурой для комфортного проживания',
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
      <body className={`${roboto.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
