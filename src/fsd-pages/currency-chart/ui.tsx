'use client';

import React from 'react';
import { Chart } from '@/widgets/chart';
import { useRates } from '@/entities/currency/api/use-rates';
import { formattedPairToRate } from '@/shared/lib/utils/common';

export const CurrencyPairsPage = ({ slug }: { slug: string }) => {
  const { data: rate, isLoading, error } = useRates(formattedPairToRate(slug));
  console.log(rate);
  return (
    <main>
      <section className='mx-auto w-full max-w-5xl px-4 pb-16'>
        {isLoading && <div className='text-center text-zinc-500'>Loading rates...</div>}
        {error && (
          <div className='text-center text-red-500'>Failed to load rates. Please try again.</div>
        )}
        {rate && <Chart data={rate[0].values} />}
      </section>
    </main>
  );
};
