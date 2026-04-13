'use client';

import { Header } from '@/widgets/header';
import { CurrencyCard } from '@/entities/currency/ui/currency-card';
import { useRates } from '@/entities/currency/api/use-rates';
import Link from 'next/link';
import { CURRENCY_PAIRS } from '@/shared/constants';

export function HomePage() {
  const { data: rates, isLoading, error } = useRates(CURRENCY_PAIRS.join(','));

  console.log(rates);

  return (
    <div className='flex min-h-screen flex-col bg-zinc-50 dark:bg-zinc-950'>
      <Header />
      <main className='flex flex-1 flex-col'>
        <section className='flex flex-col items-center justify-center py-16 text-center'>
          <h1 className='mb-4 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl'>
            Currency Rates
          </h1>
          <p className='mb-8 max-w-xl text-lg text-zinc-600 dark:text-zinc-400'>
            Track real-time exchange rates for major currency pairs. Get live prices, daily changes,
            and market data.
          </p>
          <Link
            href='/rates'
            className='rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-zinc-50 transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200'
          >
            View All Rates
          </Link>
        </section>

        <section className='mx-auto w-full max-w-5xl px-4 pb-16'>
          <h2 className='mb-6 text-xl font-semibold text-zinc-900 dark:text-zinc-50'>
            Major Pairs
          </h2>
          {isLoading && <div className='text-center text-zinc-500'>Loading rates...</div>}
          {error && (
            <div className='text-center text-red-500'>Failed to load rates. Please try again.</div>
          )}
          {rates && (
            <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
              {rates.map((rate) => (
                <CurrencyCard key={rate.meta.symbol} {...rate} />
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
