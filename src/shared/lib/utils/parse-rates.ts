import { ParsedRate, RateResponse, RateValue } from '@/shared/model';

export const parseRateResponse = (data: RateResponse[]) => {
  return data.map((rate) => ({
    ...rate,
    values: rate.values.map(parseRateValue),
  }));
};

function parseRateValue(raw: RateValue): ParsedRate {
  return {
    datetime: raw.datetime,
    open: Number(raw.open),
    high: Number(raw.high),
    low: Number(raw.low),
    close: Number(raw.close),
  };
}
