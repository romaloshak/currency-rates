'use server';
import { GetCurrencyRateResponse } from '@/shared/model';
import { currenciesResponse2, currencyResponse } from '@/shared/mock/currencies';

const TWELVE_DATA_API_KEY = process.env.TWELVEDATA_APIKEY;
const BASE_URL = process.env.TWELVEDATA_DOMAIN;

export async function getCurrencyRate(symbol: string): Promise<GetCurrencyRateResponse> {
  try {
    // const params = new URLSearchParams({
    //   symbol,
    //   interval: '1day',
    //   outputsize: '1',
    //   format: 'JSON',
    // });
    //
    // const response = await fetch(
    //   `${BASE_URL}/time_series?apikey=${TWELVE_DATA_API_KEY}&${params}`,
    //   {
    //     next: { revalidate: 60 },
    //   },
    // );
    //
    // if (!response.ok) {
    //   throw new Error(`Failed to fetch ${symbol}: ${response.statusText}`);
    // }

    return currenciesResponse2;
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to fetch ${symbol}: ${error}`);
  }
}
