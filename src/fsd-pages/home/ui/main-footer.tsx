import React from 'react';

export const MainFooter = () => {
  return (
    <section className='border-t border-zinc-200 py-16 dark:border-zinc-800'>
      <div className='mx-auto max-w-5xl px-4'>
        <h2 className='mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50'>
          More information
        </h2>
        <div className='grid gap-8 lg:grid-cols-2'>
          <div>
            <h3 className='mb-2 text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400'>
              Documentation
            </h3>
            <p className='text-sm leading-relaxed text-zinc-600 dark:text-zinc-400'>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
              voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
              occaecati cupiditate non provident.
            </p>
          </div>
          <div>
            <h3 className='mb-2 text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400'>
              Support &amp; feedback
            </h3>
            <p className='text-sm leading-relaxed text-zinc-600 dark:text-zinc-400'>
              Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum
              fuga. Et harum quidem rerum facilis est et expedita distinctio nam libero tempore, cum
              soluta nobis est eligendi optio.
            </p>
          </div>
        </div>
        <p className='mt-10 text-center text-xs text-zinc-400 dark:text-zinc-500'>
          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id
          quod maxime placeat facere possimus.
        </p>
      </div>
    </section>
  );
};
