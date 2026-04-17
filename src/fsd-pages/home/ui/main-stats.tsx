import React from 'react';

export const MainStats = () => {
  return (
    <section aria-labelledby='stats-heading' className='py-16'>
      <div className='mx-auto max-w-5xl px-4'>
        <h2
          id='stats-heading'
          className='mb-8 text-center text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50'
        >
          Service snapshot
        </h2>
        <p className='mx-auto mb-10 max-w-2xl text-center text-sm text-zinc-500 dark:text-zinc-400'>
          Placeholder metrics for layout and storytelling—replace with real analytics when
          available.
        </p>
        <ul className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          <li className='rounded-2xl border border-zinc-200 bg-white p-6 text-center shadow-sm dark:border-zinc-800 dark:bg-zinc-900'>
            <p className='text-3xl font-bold tabular-nums text-zinc-900 dark:text-zinc-50'>48+</p>
            <p className='mt-1 text-sm font-medium text-zinc-700 dark:text-zinc-300'>
              Currency pairs
            </p>
            <p className='mt-2 text-xs text-zinc-500 dark:text-zinc-400'>
              Lorem ipsum dolor sit amet
            </p>
          </li>
          <li className='rounded-2xl border border-zinc-200 bg-white p-6 text-center shadow-sm dark:border-zinc-800 dark:bg-zinc-900'>
            <p className='text-3xl font-bold tabular-nums text-zinc-900 dark:text-zinc-50'>99.9%</p>
            <p className='mt-1 text-sm font-medium text-zinc-700 dark:text-zinc-300'>
              Uptime (sample)
            </p>
            <p className='mt-2 text-xs text-zinc-500 dark:text-zinc-400'>
              Consectetur adipiscing elit
            </p>
          </li>
          <li className='rounded-2xl border border-zinc-200 bg-white p-6 text-center shadow-sm dark:border-zinc-800 dark:bg-zinc-900'>
            <p className='text-3xl font-bold tabular-nums text-zinc-900 dark:text-zinc-50'>1.2M</p>
            <p className='mt-1 text-sm font-medium text-zinc-700 dark:text-zinc-300'>
              API requests / day
            </p>
            <p className='mt-2 text-xs text-zinc-500 dark:text-zinc-400'>Sed do eiusmod tempor</p>
          </li>
          <li className='rounded-2xl border border-zinc-200 bg-white p-6 text-center shadow-sm dark:border-zinc-800 dark:bg-zinc-900'>
            <p className='text-3xl font-bold tabular-nums text-zinc-900 dark:text-zinc-50'>24/7</p>
            <p className='mt-1 text-sm font-medium text-zinc-700 dark:text-zinc-300'>
              Market hours coverage
            </p>
            <p className='mt-2 text-xs text-zinc-500 dark:text-zinc-400'>
              Ut labore et dolore magna
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};
