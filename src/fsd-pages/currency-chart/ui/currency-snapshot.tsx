import React from 'react';
import { pctFormatter, priceFormatter } from '@/entities/currency/lib/format-rate-price';
import { getSeriesStats } from '@/entities/currency/lib/series-stats';

type CurrencySnapshotProps = { stats: NonNullable<ReturnType<typeof getSeriesStats>> };

export const CurrencySnapshot = ({ stats }: CurrencySnapshotProps) => {
  return (
    <section aria-labelledby='snapshot-heading'>
      <h2
        id='snapshot-heading'
        className='mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-50'
      >
        Snapshot
      </h2>
      <dl className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
        <div className='rounded-xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900'>
          <dt className='text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400'>
            Last close
          </dt>
          <dd className='mt-1 text-2xl font-semibold tabular-nums text-zinc-900 dark:text-zinc-50'>
            {priceFormatter.format(stats.lastClose)}
          </dd>
          <dd className='mt-1 text-xs text-zinc-500 dark:text-zinc-400'>as of {stats.latestAt}</dd>
        </div>

        <div className='rounded-xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900'>
          <dt className='text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400'>
            vs previous close
          </dt>
          <dd
            className={
              stats.changePct == null
                ? 'mt-1 text-2xl font-semibold text-zinc-400'
                : stats.changePct >= 0
                  ? 'mt-1 text-2xl font-semibold tabular-nums text-emerald-600 dark:text-emerald-400'
                  : 'mt-1 text-2xl font-semibold tabular-nums text-red-600 dark:text-red-400'
            }
          >
            {stats.changePct == null ? '—' : `${pctFormatter.format(stats.changePct)}%`}
          </dd>
          <dd className='mt-1 text-xs text-zinc-500 dark:text-zinc-400'>
            {stats.previousClose != null
              ? `prev ${priceFormatter.format(stats.previousClose)}`
              : 'single bar in window'}
          </dd>
        </div>

        <div className='rounded-xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900'>
          <dt className='text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400'>
            Range in window
          </dt>
          <dd className='mt-1 text-sm tabular-nums text-zinc-900 dark:text-zinc-50'>
            <span className='font-semibold'>{priceFormatter.format(stats.rangeHigh)}</span>
            <span className='mx-1 text-zinc-400'>high</span>
          </dd>
          <dd className='mt-1 text-sm tabular-nums text-zinc-900 dark:text-zinc-50'>
            <span className='font-semibold'>{priceFormatter.format(stats.rangeLow)}</span>
            <span className='ml-1 text-zinc-400'>low</span>
          </dd>
        </div>

        <div className='rounded-xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900'>
          <dt className='text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400'>
            History window
          </dt>
          <dd className='mt-1 text-2xl font-semibold text-zinc-900 dark:text-zinc-50'>
            {stats.barCount}
          </dd>
          <dd className='mt-1 text-xs text-zinc-500 dark:text-zinc-400'>
            {stats.oldestAt} → {stats.latestAt}
          </dd>
        </div>
      </dl>
    </section>
  );
};
