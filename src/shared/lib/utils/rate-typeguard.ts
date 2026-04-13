import { GetCurrencyRateResponse, MultiRateResponse } from '@/shared/model';

export const isMultiRateResponse = (
  response: GetCurrencyRateResponse,
): response is MultiRateResponse => {
  return (response as MultiRateResponse).rate !== undefined;
};
