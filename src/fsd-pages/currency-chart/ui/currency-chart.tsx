import React from 'react';
import { Chart } from '@/widgets/chart/ui/chart';
import { UseCurrencyPairScreenResult } from '@/fsd-pages/currency-chart/model/hooks/use-currency-pair';

type CurrencyChartProps = { series: NonNullable<UseCurrencyPairScreenResult['series']> };
export const CurrencyChart = ({ series }: CurrencyChartProps) => {
  return (
    <section aria-labelledby='chart-heading' className='space-y-3'>
      <div className='flex flex-wrap items-end justify-between gap-2'>
        <h2 id='chart-heading' className='text-lg font-semibold text-zinc-900 dark:text-zinc-50'>
          Close price
        </h2>
        <p className='max-w-md text-sm text-zinc-500 dark:text-zinc-400'>
          Line chart uses daily closes; scales are normalized inside the SVG viewBox (prototype
          layout).
        </p>
      </div>
      <Chart data={series.values} />
    </section>
  );
};
