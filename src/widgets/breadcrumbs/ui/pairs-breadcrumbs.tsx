import React from 'react';
import Link from 'next/link';

export const PairsBreadcrumbs = ({ pairSymbol }: { pairSymbol: string }) => {
  return (
    <nav aria-label='Breadcrumb' className='mb-6 text-sm text-zinc-500 dark:text-zinc-400'>
      <ol className='flex flex-wrap items-center gap-2'>
        <li>
          <Link
            href='/pairs'
            className='text-zinc-700 underline-offset-4 hover:underline dark:text-zinc-300'
          >
            Pairs
          </Link>
        </li>
        <li aria-hidden='true'>/</li>
        <li className='font-medium text-zinc-900 dark:text-zinc-100'>{pairSymbol}</li>
      </ol>
    </nav>
  );
};
