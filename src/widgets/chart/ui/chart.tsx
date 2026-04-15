import React from 'react';
import { ParsedRate } from '@/shared/model';
import { getChartMath } from '@/entities/currency/lib/chart-utils';

export const Chart = (props: { data: ParsedRate[] }) => {
  const { data } = props;
  const PADDING = 15;
  const { xScale, yScale, linePath, ticks } = getChartMath(data, PADDING);
  const prices = data.map((rate) => rate.close);

  console.log({ xScale, yScale, linePath, ticks, prices });
  return (
    <div className='w-full h-80 bg-[#0f172a] p-4 rounded-xl border border-slate-800'>
      <svg viewBox='0 0 100 100' className='w-full h-full overflow-visible'>
        {/* 1. Y-Axis Ticks & Grid */}
        <g className='grid-layer'>
          {ticks.map((tick) => (
            <g key={tick}>
              <text
                x={PADDING - 3}
                y={yScale(tick)}
                fill='#64748b'
                fontSize='3'
                textAnchor='end'
                dominantBaseline='central'
              >
                {tick.toFixed(2)}
              </text>
              <line
                x1={PADDING}
                y1={yScale(tick)}
                x2={100 - PADDING}
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
