import React from 'react';
import { ParsedRate } from '@/shared/model';
import { getChartMath } from '@/widgets/chart/lib/chart-utils';
import { CHART_PADDING } from '@/shared/constants';

export const Chart = (props: { data: ParsedRate[] }) => {
  const { data } = props;
  const { xScale, yScale, linePath, ticks } = getChartMath(data, CHART_PADDING);
  const prices = data.map((rate) => rate.close);

  return (
    <div className='w-100 h-80 p-4'>
      <svg
        viewBox='0 0 100 100'
        className='w-full h-full overflow-visible'
        preserveAspectRatio='xMidYMid meet'
      >
        <g className='grid-layer'>
          {ticks.map((tick) => (
            <g key={tick}>
              <text
                x={CHART_PADDING - 3}
                y={yScale(tick)}
                fill='#64748b'
                fontSize='3'
                textAnchor='end'
                dominantBaseline='central'
              >
                {tick.toFixed(2)}
              </text>
              <line
                x1={CHART_PADDING}
                y1={yScale(tick)}
                x2={100 - CHART_PADDING}
                y2={yScale(tick)}
                stroke='#334155'
                strokeWidth='0.5'
                strokeDasharray='2 2'
                vectorEffect='non-scaling-stroke'
              />
            </g>
          ))}
        </g>

        {/* 2. The Main Path */}
        <path
          d={linePath}
          fill='none'
          stroke='#818cf8'
          strokeWidth='2'
          strokeLinecap='round'
          vectorEffect='non-scaling-stroke'
        />

        {/* 3. Hollow Dots */}
        <g>
          {prices.map((val, i) => (
            <circle
              key={i}
              cx={xScale(i)}
              cy={yScale(val)}
              r='1.5'
              fill='#0f172a'
              stroke='#818cf8'
              strokeWidth='1.5'
              vectorEffect='non-scaling-stroke'
            />
          ))}
        </g>
      </svg>
    </div>
  );
};
