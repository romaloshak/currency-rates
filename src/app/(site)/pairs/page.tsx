import type { Metadata } from 'next';
import { PairsPage } from '@/fsd-pages/pairs/ui';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Currency pairs | Currency Rates',
  description: 'Catalog of supported major currency pairs on the platform.',
};

export default function Page() {
  return <PairsPage />;
}
