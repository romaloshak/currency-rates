import { ParsedRate } from '@/shared/model';

export const getSvgPoints = (data: ParsedRate[], width: number = 100, height: number = 100) => {
  if (data.length < 2) return '';

  const prices = data.map((rate) => rate.close);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  const priceRange = maxPrice - minPrice;

  return data
    .map((point, index) => {
      // X is just the index spread across the width
      const x = (index / (data.length - 1)) * width;

      // Y calculation:
      // We subtract from 'height' because SVG (0,0) is TOP-left.
      // If we don't subtract, the chart will be upside down!
      const y = height - ((point.close - minPrice) / priceRange) * height;

      return `${x},${y}`;
    })
    .join(' ');
};
