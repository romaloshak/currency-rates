'use client';

import { useQuery } from '@tanstack/react-query';
import { GetCurrencyRateResponse } from '@/shared/model';
import { getCurrencyRate } from '@/shared/api/fetch-rate';
import { isMultiRateResponse } from '@/shared/lib/utils/rate-typeguard';
import { parseRateResponse } from '@/shared/lib/utils/parse-rates';

export function useRates(symbol: string) {
  return useQuery({
    queryKey: ['rates', symbol],
    queryFn: () => getCurrencyRate(symbol),
    select: (data: GetCurrencyRateResponse) => {
      const responses = isMultiRateResponse(data) ? Object.values(data.rate) : [data];

      return parseRateResponse(responses);
    },
  });
}
