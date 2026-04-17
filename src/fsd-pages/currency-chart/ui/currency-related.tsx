import React from 'react';
import Link from 'next/link';
import { formattedPairToLink } from '@/entities/currency/lib/format-rate-to-url';
import { UseCurrencyPairScreenResult } from '@/fsd-pages/currency-chart/model/hooks/use-currency-pair';

type CurrencyRelatedProps = {
  relatedPairs: NonNullable<UseCurrencyPairScreenResult['relatedPairs']>;
};

export const CurrencyRelated = ({ relatedPairs }: CurrencyRelatedProps) => {
  return (
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
  );
};
