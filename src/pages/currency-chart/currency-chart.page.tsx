'use client';

import React from 'react';
import { Chart } from '@/widgets/chart';
import { useRates } from '@/entities/currency/api/use-rates';
import { formattedPairToRate } from '@/shared/lib/utils/common';

export const CurrencyChartPage = ({ slug }: { slug: string }) => {
  console.log(formattedPairToRate(slug));
  const { data: rate, isLoading, error } = useRates(formattedPairToRate(slug));
  console.log(rate);
  return (
    <main>
      hello world!
      <section>
        {isLoading && <div className='text-center text-zinc-500'>Loading rates...</div>}
        {error && (
          <div className='text-center text-red-500'>Failed to load rates. Please try again.</div>
        )}
        {rate && <Chart data={rate[0].values} />}
      </section>
    </main>
  );
};
