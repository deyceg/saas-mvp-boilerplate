import classNames from 'classnames';
import React from 'react';
import { ThemeContext } from 'theme/ThemeContext';

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
};

export const TailwindCard = ({ header, body, footer }: TailwindCardProps) => {
  // Classnames map to tailwindcss categories.
  const layoutClass = classNames('overflow-hidden');
  const sizingClass = classNames();
  const spacingClass = classNames('p-10');
  const typographyClass = classNames(
    { 'text-gray': true },
    { 'dark:text-gray-200': true },
  );
  const borderClass = classNames(
    'border rounded-lg',
    { 'border-gray-100': true },
    { 'dark:border-gray-600': true },
  );
  const colorClass = classNames(
    { 'bg-white': true },
    { 'dark:bg-gray-700': true },
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
