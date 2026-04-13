import Link from 'next/link';

export function Header() {
  return (
    <header className='flex h-14 items-center justify-between border-b border-zinc-200 bg-white px-6 dark:border-zinc-800 dark:bg-zinc-900'>
      <Link href='/' className='text-lg font-semibold text-zinc-900 dark:text-zinc-50'>
        Currency Rates
      </Link>
      <nav className='flex gap-6'>
        <Link
          href='/'
          className='text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50'
        >
          Home
        </Link>
        <Link
          href='/rates'
          className='text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50'
        >
          Rates
        </Link>
      </nav>
    </header>
  );
}
