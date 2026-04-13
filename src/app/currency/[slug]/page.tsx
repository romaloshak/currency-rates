import { CurrencyChartPage } from '@/pages/currency-chart/currency-chart.page';

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return <CurrencyChartPage slug={slug} />;
}
