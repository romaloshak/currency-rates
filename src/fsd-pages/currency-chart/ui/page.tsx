'use client';

import Link from 'next/link';
import { PairsBreadcrumbs } from '@/widgets/breadcrumbs/ui';
import { useCurrencyPair } from '@/fsd-pages/currency-chart/model/hooks/use-currency-pair';
import { CurrencyHeader } from '@/fsd-pages/currency-chart/ui/currency-header';
import { CurrencySnapshot } from '@/fsd-pages/currency-chart/ui/currency-snapshot';
import { CurrencyChart } from '@/fsd-pages/currency-chart/ui/currency-chart';
import { CurrencyRelated } from '@/fsd-pages/currency-chart/ui/currency-related';
import { CurrencyOhlc } from '@/fsd-pages/currency-chart/ui/currency-ohlc';

export const CurrencyPairsPage = ({ slug }: { slug: string }) => {
  const { pairSymbol, isLoading, error, series, isDemoMismatch, stats, recentBars, relatedPairs } =
    useCurrencyPair(slug);

  return (
    <main className='mx-auto w-full max-w-6xl flex-1 px-4 py-8'>
      <PairsBreadcrumbs pairSymbol={pairSymbol} />
      {isLoading && (
        <p className='rounded-lg border border-zinc-200 bg-white px-4 py-8 text-center text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900'>
          Loading rates…
        </p>
      )}
      {error && (
        <p
          className='rounded-lg border border-red-200 bg-red-50 px-4 py-8 text-center text-red-700 dark:border-red-900 dark:bg-red-950/40 dark:text-red-300'
          role='alert'
        >
          Failed to load rates. Please try again.
        </p>
      )}
      {!isLoading && !error && !series && (
        <div className='rounded-lg border border-amber-200 bg-amber-50 px-4 py-8 text-center dark:border-amber-900 dark:bg-amber-950/30'>
          <p className='mb-4 text-amber-900 dark:text-amber-100'>
            No series found for {pairSymbol}.
          </p>
          <Link
            href='/pairs'
            className='text-sm font-medium text-amber-950 underline dark:text-amber-200'
          >
            Back to catalog
          </Link>
        </div>
      )}
      {series && stats && (
        <div className='space-y-10'>
          {isDemoMismatch && (
            <p
              className='rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-100'
              role='status'
            >
              Demo API returns one series ({series.meta.symbol}). Chart and table below use that
              feed while you browse {pairSymbol}.
            </p>
          )}
          <CurrencyHeader pairSymbol={pairSymbol} series={series} isDemoMismatch={isDemoMismatch} />
          <CurrencySnapshot stats={stats} />
          <CurrencyChart series={series} />
          <CurrencyOhlc series={series} recentBars={recentBars} />
          <CurrencyRelated relatedPairs={relatedPairs} />
        </div>
      )}
    </main>
  );
};
