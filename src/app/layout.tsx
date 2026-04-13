import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from '@/app/providers/providers';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Currency Rates - Real-time Exchange Rates',
  description: 'Track real-time currency exchange rates with our TradingView-style platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${inter.variable} h-full antialiased`}>
      <body className='min-h-full flex flex-col'>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
