import classNames from 'classnames';

type TailwindCardProps = {
  /**
   * Element to render in the card header
   */
  header?: React.ReactElement<HTMLElement>;
  /**
   * Element to render in the card body
   */
  body: React.ReactElement<HTMLElement>;
  /**
   * Element to render in the card footer
   */
  footer?: React.ReactElement<HTMLElement>;
  /**
   * Control the theme
   */
  variant?: 'light' | 'dark';
};

export const TailwindCard = ({
  header,
  body,
  footer,
  variant = 'light',
}: TailwindCardProps) => {
  // Classnames broadly map to tailwindcss categories.
  const layoutClass = classNames('overflow-hidden');
  const sizingClass = classNames();
  const spacingClass = classNames('p-10');
  const typographyClass = classNames(
    { 'text-gray': variant === 'light' },
    { 'text-gray-200': variant === 'dark' },
  );
  const borderClass = classNames(
    'border rounded-lg',
    'border-gray-100',
    { 'border-gray-100': variant === 'light' },
    { 'border-gray-700': variant === 'dark' },
  );
  const colorClass = classNames(
    { 'bg-white': variant === 'light' },
    { 'bg-gray-800': variant === 'dark' },
  );
  const effectClass = classNames('shadow');
  // Any additional classes required
  const headerClass = classNames('pb-10');
  const bodyClass = classNames('');
  const footerClass = classNames('');

  return (
    <div
      className={[
        layoutClass,
        sizingClass,
        spacingClass,
        typographyClass,
        borderClass,
        colorClass,
        effectClass,
      ].join(' ')}
    >
      {header && <div className={headerClass}>{header}</div>}
      <div className={bodyClass}>{body}</div>
      {footer && <div className={footerClass}>{footer}</div>}
    </div>
  );
};
