import { CurrencyPairsPage } from '@/fsd-pages/currency-chart/ui/page';

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return <CurrencyPairsPage slug={slug} />;
}
