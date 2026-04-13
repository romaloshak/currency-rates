import React from 'react';
import { ParsedRate } from '@/shared/model';
import { getSvgPoints } from '@/entities/currency/lib/chart-utils';

export const Chart = (props: { data: ParsedRate[] }) => {
  const { data } = props;
  const points = getSvgPoints(data, 100, 100);
  console.log(points);
  return (
    <div className='w-full h-64 bg-slate-900 p-4 rounded-lg'>
      <svg
        // viewBox defines our internal 100x100 coordinate system
        viewBox='0 0 100 100'
        className='w-full h-full overflow-visible'
        preserveAspectRatio='none'
      >
        {/* The Line */}
        <polyline
          fill='none'
          stroke='#3b82f6' // Tailwind blue-500
          strokeWidth='1'
          strokeLinecap='round'
          strokeLinejoin='round'
          points={points}
        />
      </svg>
    </div>
  );
};
