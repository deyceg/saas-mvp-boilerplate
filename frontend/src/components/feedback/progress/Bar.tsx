type BarProps = {
  steps: string[];
  colors: string[];
  current: number;
};

export const Bar = ({
  steps = ['default'],
  colors = ['bg-gray-500'],
  current = 0,
}: BarProps) => {
  return (
    <div className="relative pt-1">
      <div className="overflow-hidden h-3 mb-4 text-xs flex rounded bg-transparent space-x-1">
        {steps.map((e, i) => (
          <div
            key={i + 1}
            className={`w-1/${
              steps.length
            } shadow-none flex flex-col whitespace-nowrap ${colors[i]} ${
              current > i ? '' : 'opacity-50'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};
