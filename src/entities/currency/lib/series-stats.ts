import type { ParsedRate, ParsedRateResponse } from '@/shared/model';

export function getSeriesForSymbol(
  series: ParsedRateResponse[],
  symbol: string,
): ParsedRateResponse | undefined {
  const normalized = symbol.trim().toUpperCase();
  return series.find((s) => s.meta.symbol.toUpperCase() === normalized);
}

export type SeriesStats = {
  lastClose: number;
  previousClose: number | null;
  changePct: number | null;
  rangeHigh: number;
  rangeLow: number;
  latestAt: string;
  oldestAt: string;
  barCount: number;
};

export function getSeriesStats(values: ParsedRate[]): SeriesStats | null {
  if (values.length === 0) {
    return null;
  }

  const last = values[0];
  const prev = values[1];
  let rangeHigh = last.high;
  let rangeLow = last.low;

  for (const v of values) {
    if (v.high > rangeHigh) rangeHigh = v.high;
    if (v.low < rangeLow) rangeLow = v.low;
  }

  const previousClose = prev ? prev.close : null;
  const changePct =
    previousClose != null && previousClose !== 0
      ? ((last.close - previousClose) / previousClose) * 100
      : null;

  return {
    lastClose: last.close,
    previousClose,
    changePct,
    rangeHigh,
    rangeLow,
    latestAt: last.datetime,
    oldestAt: values[values.length - 1].datetime,
    barCount: values.length,
  };
}
