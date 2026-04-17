import React from 'react';

export const MainAbout = () => {
  return (
    <section
      aria-labelledby='about-heading'
      className='border-t border-zinc-200 bg-zinc-100/80 py-16 dark:border-zinc-800 dark:bg-zinc-900/40'
    >
      <div className='mx-auto max-w-5xl px-4'>
        <h2
          id='about-heading'
          className='mb-6 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50'
        >
          About the service
        </h2>
        <div className='space-y-4 text-zinc-600 dark:text-zinc-400'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas.
          </p>
        </div>
      </div>
    </section>
  );
};
