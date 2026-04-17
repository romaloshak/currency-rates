'use client';

import Link from 'next/link';
import { Chart } from '@/widgets/chart';
import { priceFormatter } from '@/entities/currency/lib/format-rate-price';
import { formattedPairToLink } from '@/entities/currency/lib/format-rate-to-url';
import { useCurrencyPair } from './model/hooks/use-currency-pair';
import { PairsBreadcrumbs } from '@/widgets/breadcrumbs/ui';
import { CurrencyHeader, CurrencySnapshot } from '@/fsd-pages/currency-chart/ui';

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
          <CurrencySnapshot />
          <section aria-labelledby='chart-heading' className='space-y-3'>
            <div className='flex flex-wrap items-end justify-between gap-2'>
              <h2
                id='chart-heading'
                className='text-lg font-semibold text-zinc-900 dark:text-zinc-50'
              >
                Close price
              </h2>
              <p className='max-w-md text-sm text-zinc-500 dark:text-zinc-400'>
                Line chart uses daily closes; scales are normalized inside the SVG viewBox
                (prototype layout).
              </p>
            </div>
            <Chart data={series.values} />
          </section>
          <section aria-labelledby='ohlc-heading' className='space-y-3'>
            <h2 id='ohlc-heading' className='text-lg font-semibold text-zinc-900 dark:text-zinc-50'>
              Recent OHLC
            </h2>
            <div className='overflow-x-auto rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900'>
              <table className='w-full min-w-xl text-left text-sm'>
                <caption className='sr-only'>
                  Most recent bars for {series.meta.symbol}, newest first
                </caption>
                <thead className='border-b border-zinc-200 bg-zinc-50 text-xs font-semibold uppercase text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800/80 dark:text-zinc-400'>
                  <tr>
                    <th scope='col' className='px-3 py-3'>
                      Date
                    </th>
                    <th scope='col' className='px-3 py-3 text-right'>
                      Open
                    </th>
                    <th scope='col' className='px-3 py-3 text-right'>
                      High
                    </th>
                    <th scope='col' className='px-3 py-3 text-right'>
                      Low
                    </th>
                    <th scope='col' className='px-3 py-3 text-right'>
                      Close
                    </th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-zinc-100 dark:divide-zinc-800'>
                  {recentBars.map((row) => (
                    <tr
                      key={row.datetime}
                      className='tabular-nums text-zinc-800 dark:text-zinc-200'
                    >
                      <th
                        scope='row'
                        className='whitespace-nowrap px-3 py-2.5 font-medium text-zinc-900 dark:text-zinc-50'
                      >
                        {row.datetime}
                      </th>
                      <td className='px-3 py-2.5 text-right'>{priceFormatter.format(row.open)}</td>
                      <td className='px-3 py-2.5 text-right'>{priceFormatter.format(row.high)}</td>
                      <td className='px-3 py-2.5 text-right'>{priceFormatter.format(row.low)}</td>
                      <td className='px-3 py-2.5 text-right font-medium'>
                        {priceFormatter.format(row.close)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
          <section
            aria-labelledby='related-heading'
            className='border-t border-zinc-200 pt-8 dark:border-zinc-800'
          >
            <h2
              id='related-heading'
              className='mb-3 text-lg font-semibold text-zinc-900 dark:text-zinc-50'
            >
              Other pairs
            </h2>
            <ul className='flex flex-wrap gap-2'>
              {relatedPairs.map((p) => (
                <li key={p}>
                  <Link
                    href={`/currency/${formattedPairToLink(p)}`}
                    className='inline-flex rounded-full border border-zinc-300 bg-white px-3 py-1.5 text-sm font-medium text-zinc-800 transition-colors hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700'
                  >
                    {p}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      )}
    </main>
  );
};
