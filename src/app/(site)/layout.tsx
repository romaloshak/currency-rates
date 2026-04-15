import { Header } from '@/widgets/header';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex min-h-screen flex-col bg-zinc-50 dark:bg-zinc-950'>
      <Header />
      <div className='flex min-h-0 flex-1 flex-col'>{children}</div>
    </div>
  );
}
