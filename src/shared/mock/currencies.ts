import { MultiRateResponse } from '@/shared/model';

export const currencyResponse: MultiRateResponse = {
  rate: {
    'EUR/USD': {
      meta: {
        symbol: 'EUR/USD',
        interval: '1day',
        currency_base: 'Euro',
        currency_quote: 'US Dollar',
        type: 'Physical Currency',
      },
      values: [
        {
          datetime: '2026-04-12',
          open: '1.17254',
          high: '1.17312',
          low: '1.1717',
          close: '1.17276',
        },
      ],
      status: 'ok',
    },
    'GBP/USD': {
      meta: {
        symbol: 'GBP/USD',
        interval: '1day',
        currency_base: 'British Pound',
        currency_quote: 'US Dollar',
        type: 'Physical Currency',
      },
      values: [
        {
          datetime: '2026-04-12',
          open: '1.34567',
          high: '1.34606',
          low: '1.3453',
          close: '1.34552',
        },
      ],
      status: 'ok',
    },
    'USD/JPY': {
      meta: {
        symbol: 'USD/JPY',
        interval: '1day',
        currency_base: 'US Dollar',
        currency_quote: 'Japanese Yen',
        type: 'Physical Currency',
      },
      values: [
        {
          datetime: '2026-04-12',
          open: '159.25013',
          high: '159.30261',
          low: '159.13881',
          close: '159.20455',
        },
      ],
      status: 'ok',
    },
    'USD/CHF': {
      meta: {
        symbol: 'USD/CHF',
        interval: '1day',
        currency_base: 'US Dollar',
        currency_quote: 'Swiss Franc',
        type: 'Physical Currency',
      },
      values: [
        {
          datetime: '2026-04-12',
          open: '0.78941',
          high: '0.78949',
          low: '0.78884',
          close: '0.78932',
        },
      ],
      status: 'ok',
    },
    'AUD/USD': {
      meta: {
        symbol: 'AUD/USD',
        interval: '1day',
        currency_base: 'Australian Dollar',
        currency_quote: 'US Dollar',
        type: 'Physical Currency',
      },
      values: [
        {
          datetime: '2026-04-12',
          open: '0.70666',
          high: '0.70736',
          low: '0.70636',
          close: '0.70686',
        },
      ],
      status: 'ok',
    },
    'USD/CAD': {
      meta: {
        symbol: 'USD/CAD',
        interval: '1day',
        currency_base: 'US Dollar',
        currency_quote: 'Canadian Dollar',
        type: 'Physical Currency',
      },
      values: [
        {
          datetime: '2026-04-12',
          open: '1.38396',
          high: '1.38445',
          low: '1.38078',
          close: '1.38398',
        },
      ],
      status: 'ok',
    },
    'USD/RUB': {
      values: [],
      meta: {
        symbol: '',
        interval: '',
        currency_base: '',
        currency_quote: '',
        type: '',
      },
      status: undefined,
    },
    'CNY/USD': {
      values: [],
      meta: {
        symbol: '',
        interval: '',
        currency_base: '',
        currency_quote: '',
        type: '',
      },
      status: undefined,
    },
  },
};

export const currenciesResponse2 = {
  meta: {
    symbol: 'EUR/USD',
    interval: '1day',
    currency_base: 'Euro',
    currency_quote: 'US Dollar',
    type: 'Physical Currency',
  },
  values: [
    {
      datetime: '2026-04-12',
      open: '1.17254',
      high: '1.17312',
      low: '1.1717',
      close: '1.17269',
    },
    {
      datetime: '2026-04-11',
      open: '1.17258',
      high: '1.17287',
      low: '1.17161',
      close: '1.17257',
    },
  ],
};
