import { CURRENCY_PAIRS } from '@/shared/constants';

export type CurrencyPair = (typeof CURRENCY_PAIRS)[number];

export type RateValue = {
  datetime: string;
  open: string;
  high: string;
  low: string;
  close: string;
};

export type RateMeta = {
  symbol: string;
  interval: string;
  currency_base: string;
  currency_quote: string;
  type: string;
};

export type RateResponse = {
  values: RateValue[];
  meta: RateMeta;
  status?: string;
};

export type MultiRateResponse = {
  rate: Record<CurrencyPair, RateResponse>;
};

export type GetCurrencyRateResponse = MultiRateResponse | RateResponse;
