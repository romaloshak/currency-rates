export const priceFormatter = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 4,
  maximumFractionDigits: 5,
});

export const pctFormatter = new Intl.NumberFormat('en-US', {
  signDisplay: 'exceptZero',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
