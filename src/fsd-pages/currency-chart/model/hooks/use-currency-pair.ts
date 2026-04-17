import { useRates } from '@/entities/currency/api/use-rates';
import { CURRENCY_PAIRS } from '@/shared/constants';
import { getSeriesForSymbol, getSeriesStats } from '@/entities/currency/lib/series-stats';
import { ParsedRate, ParsedRateResponse } from '@/shared/model';
import {
  formattedPairToLink,
  formattedPairToRate,
} from '@/entities/currency/lib/format-rate-to-url';

export type UseCurrencyPairScreenResult = {
  pairSymbol: string;
  isLoading: boolean;
  error: Error | null;
  series: ParsedRateResponse | undefined;
  isDemoMismatch: boolean;
  stats: ReturnType<typeof getSeriesStats>;
  recentBars: ParsedRate[];
  relatedPairs: string[];
};

export function useCurrencyPair(slug: string): UseCurrencyPairScreenResult {
  const pairSymbol = formattedPairToRate(slug);
  const { data: rateList, isLoading, error } = useRates(pairSymbol);

  let series = getSeriesForSymbol(rateList ?? [], pairSymbol);
  let isDemoMismatch = false;

  if (!series && rateList?.length) {
    series = rateList[0];
    isDemoMismatch = series.meta.symbol.toUpperCase() !== pairSymbol.toUpperCase();
  }

  const stats = series ? getSeriesStats(series.values) : null;
  const recentBars = series?.values.slice(0, 12) ?? [];
  const relatedPairs = CURRENCY_PAIRS.filter(
    (pair) => formattedPairToLink(pair) !== slug.toLowerCase(),
  ).slice(0, 5);

  return {
    pairSymbol,
    isLoading,
    error,
    series,
    isDemoMismatch,
    stats,
    recentBars,
    relatedPairs,
  };
}
