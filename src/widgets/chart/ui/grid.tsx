export const Grid = ({ padding = 10 }: { padding?: number }) => {
  // We want 5 horizontal lines
  const ticks = [0, 0.25, 0.5, 0.75, 1];

  return (
    <g className='chart-grid'>
      {ticks.map((t) => {
        // Map 0-1 range to our padded y-coordinates
        const y = padding + t * (100 - padding * 2);
        return (
          <line
            key={t}
            x1={padding}
            y1={y}
            x2={100 - padding}
            y2={y}
            stroke='#334155' // slate-700
            strokeWidth='0.5'
            strokeDasharray='2 4' // [dash length] [gap length]
            vectorEffect='non-scaling-stroke'
          />
        );
      })}
    </g>
  );
};
