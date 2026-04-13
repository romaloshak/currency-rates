import { RateResponse } from '@/shared/model';
import { isNil } from '@/shared/lib/utils/common';

export function CurrencyCard(rate: RateResponse) {
  if (isNil(rate)) {
    return null;
  }

  const { symbol } = rate.meta;
  const { high, open, low, close } = rate.values[0];

  const price = +close;
  const change = price - +open;
  const changePercent = +open > 0 ? (change / +open) * 100 : 0;
  const isPositive = change >= 0;

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
      <div className='text-2xl font-bold text-zinc-900 dark:text-zinc-100'>{price.toFixed(4)}</div>
      <div className='mt-2 flex justify-between text-sm text-zinc-500 dark:text-zinc-400'>
        <span>H: {Number(high).toFixed(4)}</span>
        <span>L: {Number(low).toFixed(4)}</span>
      </div>
    </div>
  );
}
