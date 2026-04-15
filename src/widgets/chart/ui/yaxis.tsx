export const YAxis = ({
  minPrice,
  maxPrice,
  padding = 10,
}: {
  minPrice: number;
  maxPrice: number;
  padding: number;
}) => {
  const ticks = [0, 0.25, 0.5, 0.75, 1];
  const priceRange = maxPrice - minPrice;

  console.log({ minPrice, maxPrice, priceRange, ticks });

  return (
    <g className='y-axis-labels'>
      {ticks.map((t) => {
        // Calculate the same Y position as the grid lines
        const y = padding + t * (100 - padding * 2);

        // Map the percentage back to the actual price for the label
        // We use (1 - t) because SVG Y=0 is the TOP (max price)
        const labelValue = (maxPrice - t * priceRange).toFixed(3);
        console.log({ y, t, labelValue });

        return (
          <text
            key={t}
            x={padding - 2} // Position slightly to the left of the grid
            y={y}
            fill='#64748b' // slate-500
            fontSize='3' // Small font for our 100x100 viewBox
            textAnchor='end'
            dominantBaseline='central'
            className='font-sans select-none'
          >
            {labelValue}
          </text>
        );
      })}
    </g>
  );
};
