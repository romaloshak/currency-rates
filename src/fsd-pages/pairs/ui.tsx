import React from 'react';
import { CURRENCY_PAIRS } from '@/shared/constants';
import Link from 'next/link';
import { formattedPairToLink } from '@/entities/currency/lib/format-rate-to-url';

export const PairsPage = () => {
  return (
    <main className='mx-auto w-full max-w-3xl flex-1 px-4 py-10'>
      <h1 className='mb-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50'>
        Supported pairs
      </h1>
      <p className='mb-2 text-zinc-600 dark:text-zinc-400'>
        Static catalog: data comes only from app constants, no server fetch.
      </p>
      <p className='mb-8 text-sm text-zinc-500 dark:text-zinc-500'>
        Rendering mode: SSG (
        <code className='rounded bg-zinc-200 px-1 dark:bg-zinc-800'>force-static</code>).
      </p>
      <ul className='divide-y divide-zinc-200 rounded-lg border border-zinc-200 bg-white dark:divide-zinc-800 dark:border-zinc-800 dark:bg-zinc-900'>
        {CURRENCY_PAIRS.map((pair) => (
          <li key={pair}>
            <Link
              href={`/currency/${formattedPairToLink(pair)}`}
              className='flex items-center justify-between px-4 py-3 text-zinc-900 transition-colors hover:bg-zinc-50 dark:text-zinc-50 dark:hover:bg-zinc-800/80'
            >
              <span className='font-medium'>{pair}</span>
              <span className='text-sm text-zinc-500 dark:text-zinc-400'>View chart</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};
