'use client';

import { useQuery } from '@tanstack/react-query';
import { GetCurrencyRateResponse } from '@/shared/model';
import { getCurrencyRate } from '@/shared/api/fetch-rate';
import { isMultiRateResponse } from '@/shared/lib/utils/rate-typeguard';

export function useRates(symbol: string) {
  return useQuery({
    queryKey: ['rates', symbol],
    queryFn: () => getCurrencyRate(symbol),
    select: (data: GetCurrencyRateResponse) => {
      if (isMultiRateResponse(data)) {
        return Object.values(data.rate).map((item) => item);
      }
      return [data];
    },
  });
}
