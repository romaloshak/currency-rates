import React from 'react';
import { UseCurrencyPairScreenResult } from '@/fsd-pages/currency-chart/model/hooks/use-currency-pair';

type CurrencyHeaderProps = Pick<
  UseCurrencyPairScreenResult,
  'isDemoMismatch' | 'series' | 'pairSymbol'
>;

export const CurrencyHeader = ({ series, pairSymbol, isDemoMismatch }: CurrencyHeaderProps) => {
  return (
    <header className='space-y-3 border-b border-zinc-200 pb-8 dark:border-zinc-800'>
      <div className='flex flex-wrap items-end justify-between gap-4'>
        <div>
          <h1 className='text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl'>
            {pairSymbol}
          </h1>
          {isDemoMismatch ? (
            <p className='mt-1 max-w-xl text-lg text-zinc-600 dark:text-zinc-400'>
              Demo feed is still <span className='font-medium'>{series?.meta.symbol}</span> (
              {series?.meta.currency_base} / {series?.meta.currency_quote}).
            </p>
          ) : (
            <p className='mt-1 text-lg text-zinc-600 dark:text-zinc-400'>
              {series?.meta.currency_base} / {series?.meta.currency_quote}
            </p>
          )}
        </div>
        <div className='flex flex-wrap gap-2'>
          <span className='rounded-full border border-zinc-300 bg-white px-3 py-1 text-xs font-medium uppercase tracking-wide text-zinc-700 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200'>
            {series?.meta.interval}
          </span>
          <span className='rounded-full border border-zinc-300 bg-zinc-100 px-3 py-1 text-xs text-zinc-600 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-300'>
            {series?.meta.type}
          </span>
        </div>
      </div>
    </header>
  );
};
