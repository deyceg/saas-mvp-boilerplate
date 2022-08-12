import classNames from 'classnames';

type DividerProps = {
  text?: string;
};

export const Divider = ({ text = '' }: DividerProps) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-dotted border-gray-400" />
      </div>
      <div className="relative flex justify-center text-sm">
        <span className="px-2 bg-white dark:bg-gray-700 dark:text-gray-200 text-gray-500">
          {text}
        </span>
      </div>
    </div>
  );
};
