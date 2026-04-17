import React from 'react';
import { UseCurrencyPairScreenResult } from '@/fsd-pages/currency-chart/model/hooks/use-currency-pair';
import { priceFormatter } from '@/entities/currency/lib/format-rate-price';
import { Temporal } from '@js-temporal/polyfill';

type CurrencyOhlcProps = { series: NonNullable<UseCurrencyPairScreenResult['series']> } & Pick<
  UseCurrencyPairScreenResult,
  'recentBars'
>;

export const CurrencyOhlc = ({ series, recentBars }: CurrencyOhlcProps) => {
  return (
    <section aria-labelledby='ohlc-heading' className='space-y-3 max-w-full flex-1'>
      <h2 id='ohlc-heading' className='text-lg font-semibold text-zinc-900 dark:text-zinc-50'>
        Recent OHLC
      </h2>
      <div className='w-full max-w-full min-w-0 overflow-x-auto rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900'>
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
            {recentBars.map((row) => {
              const date = Temporal.PlainDate.from(row.datetime);
              const formatted = date.toLocaleString('ru-RU');
              return (
                <tr key={row.datetime} className='tabular-nums text-zinc-800 dark:text-zinc-200'>
                  <th
                    scope='row'
                    className='whitespace-nowrap px-3 py-2.5 font-medium text-zinc-900 dark:text-zinc-50'
                  >
                    {formatted}
                  </th>
                  <td className='px-3 py-2.5 text-right'>{priceFormatter.format(row.open)}</td>
                  <td className='px-3 py-2.5 text-right'>{priceFormatter.format(row.high)}</td>
                  <td className='px-3 py-2.5 text-right'>{priceFormatter.format(row.low)}</td>
                  <td className='px-3 py-2.5 text-right font-medium'>
                    {priceFormatter.format(row.close)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};
