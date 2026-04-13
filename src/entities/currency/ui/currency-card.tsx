import { isNil } from '@/shared/lib/utils/common';
import { ParsedRateResponse } from '@/shared/model';
import { Temporal } from '@js-temporal/polyfill';

export function CurrencyCard(rate: ParsedRateResponse) {
  if (isNil(rate)) {
    return null;
  }

  const { low, datetime, open, high, close: price } = rate.values[0];
  const { symbol } = rate.meta;

  const change = price - open;
  const changePercent = open > 0 ? (change / open) * 100 : 0;
  const isPositive = change >= 0;
  const date = Temporal.PlainDate.from(datetime);
  const formatted = date.toLocaleString('ru-RU');

  console.log(formatted);

  return (
    <div className='rounded-lg border border-zinc-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900'>
      <div className='mb-3 flex items-center justify-between'>
        <span className='font-semibold text-zinc-900 dark:text-zinc-100'>{symbol}</span>
        <span
          className={`text-sm font-medium ${
            isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
          }`}
        >
          {isPositive ? '+' : ''}
          {change.toFixed(4)} ({changePercent.toFixed(2)}%)
        </span>
      </div>
      <div className='flex justify-between'>
        <span className='text-2xl font-bold text-zinc-900 dark:text-zinc-100'>
          {price.toFixed(4)}
        </span>
        <span className='text-sm text-zinc-900 dark:text-zinc-100'>{formatted}</span>
      </div>
      <div className='mt-2 flex justify-between text-sm text-zinc-500 dark:text-zinc-400'>
        <span>H: {high.toFixed(4)}</span>
        <span>L: {low.toFixed(4)}</span>
      </div>
    </div>
  );
}
