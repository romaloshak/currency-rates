import { scaleLinear } from 'd3-scale';
import { line, curveMonotoneX } from 'd3-shape';
import { extent } from 'd3-array';
import { ParsedRate } from '@/shared/model';

export const getChartMath = (data: ParsedRate[], padding: number) => {
  const prices = data.map((rate) => rate.close);
  const [min, max] = extent(prices);

  const domain = [min ?? 0, max ?? 100];

  const xScale = scaleLinear()
    .domain([0, data.length - 1])
    .range([padding, 100 - padding]);

  const yScale = scaleLinear()
    .domain(domain)
    .nice(5)
    .range([100 - padding, padding]);

  const lineGenerator = line<number>()
    .x((_, i) => xScale(i))
    .y((d) => yScale(d))
    .curve(curveMonotoneX);

  const ticks = yScale.ticks(6);

  return { xScale, yScale, linePath: lineGenerator(prices) ?? undefined, ticks };
};
