import React from 'react';
import { Chart } from '@/widgets/chart/ui/chart';
import { UseCurrencyPairScreenResult } from '@/fsd-pages/currency-chart/model/hooks/use-currency-pair';

type CurrencyChartProps = { series: NonNullable<UseCurrencyPairScreenResult['series']> };

export const CurrencyChart = ({ series }: CurrencyChartProps) => {
  return (
    <section aria-labelledby='chart-heading' className='space-y-3 flex-1'>
      <div className='flex flex-wrap items-end justify-between gap-2'>
        <h2 id='chart-heading' className='text-lg font-semibold text-zinc-900 dark:text-zinc-50'>
          Close price
        </h2>
      </div>
      <Chart data={series.values} />
    </section>
  );
};
