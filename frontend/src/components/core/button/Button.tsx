import classNames from 'classnames';
import React, { FunctionComponent } from 'react';
import { ComponentType } from 'react';

type ButtonProps = {
  icon: React.ReactElement<HTMLElement>;
  text: string;
  onClick: Function;
  isDisabled?: boolean;
};

// export const Button = ({
//   text = `Click me!`,
//   isDisabled = false,
//   onClick,
// }: ButtonProps) => {
//   return (
//     <button
//       type="button"
//       className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//       disabled={isDisabled}
//     >
//       {text}
//     </button>
//   );
// };

type NavButtonProps = {
  href: string;
  text: string;
};

export const NavButton = ({ text = `Click me!`, href }: NavButtonProps) => {
  return (
    <>
      <a
        href={href}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        {text}
      </a>
    </>
  );
};

type TailwindButtonProps = {
  /**
   * Text to render on the button
   */
  text?: string;
  /**
   * Click handler
   */
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  /**
   * Control the state of the button e.g. for use in a \<form\> element
   */
  isActive?: boolean;
  /**
   * Render an icon inside the button
   */
  Icon?: FunctionComponent<React.ComponentProps<'svg'>>;
  /**
   * Position of the icon relative to the text
   */
  iconPosition?: 'left' | 'right';
  /**
   * Control the visibility of the icon:
   *
   * static -> always visible
   * active -> visible when isActive is truthy
   */
  iconEffect?: 'static' | 'active';
  /**
   * Switch between fixed and percentage based widths
   */
  width?: 'fixed' | 'percent';
  /**
   * Constrain the button width
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Control the button variant
   */
  type?: 'solid' | 'ghost';
  /**
   * Control the theme
   */
  variant?: 'primary' | 'secondary';
};

export const TailwindButton = ({
  text = null,
  onClick,
  isActive = false,
  Icon = null,
  iconPosition = 'left',
  iconEffect = 'static',
  width = 'percent',
  size = 'md',
  type = 'solid',
  variant = 'primary',
}: TailwindButtonProps) => {
  // Classnames broadly map to tailwindcss categories.
  const layoutClass = classNames('justify-center', {
    flex: Icon === null,
    'inline-flex items-center': Icon !== null,
  });
  const sizingClass = classNames(
    // percent
    { 'w-1/4': width === 'percent' && size === 'sm' },
    { 'w-1/2': width === 'percent' && size === 'md' },
    { 'w-full': width === 'percent' && size === 'lg' },
    // fixed
    { 'w-24': width === 'fixed' && size === 'sm' },
    { 'w-48': width === 'fixed' && size === 'md' },
    { 'w-96': width === 'fixed' && size === 'lg' },
  );
  const spacingClass = classNames(
    { 'py-2 px-4': size === 'sm' },
    { 'py-3 px-5': size === 'md' },
    { 'py-4 px-6': size === 'lg' },
  );
  const typographyClass = classNames(
    'font-medium',
    { 'text-sm': size === 'sm' },
    { 'text-md': size === 'md' },
    { 'text-lg': size === 'lg' },
  );
  const borderClass = classNames(
    'border rounded-md',
    // solid
    { 'border-transparent': type === 'solid' && variant === 'primary' },
    { 'border-transparent': type === 'solid' && variant === 'secondary' },
    // ghost
    {
      'border-indigo-600': type === 'ghost' && variant === 'primary',
    },
    { 'border-gray-600': type === 'ghost' && variant === 'secondary' },
  );
  const colorClass = classNames(
    //solid
    { 'bg-indigo-600 text-white': type === 'solid' && variant === 'primary' },
    {
      'bg-gray-600 text-white': type === 'solid' && variant === 'secondary',
    },
    // ghost
    { 'bg-white text-indigo-600': type === 'ghost' && variant === 'primary' },
    { 'bg-white text-gray-600': type === 'ghost' && variant === 'secondary' },
  );
  const effectClass = classNames(
    'shadow-sm',
    //solid
    {
      'hover:bg-indigo-700': type === 'solid' && variant === 'primary',
    },
    {
      'hover:bg-gray-700': type === 'solid' && variant === 'secondary',
    },
    // ghost
    {
      'hover:border-indigo-700 hover:text-indigo-700':
        type === 'ghost' && variant === 'primary',
    },
    {
      'hover:border-gray-700 hover:text-gray-700':
        type === 'ghost' && variant === 'secondary',
    },
  );
  const iconClass = classNames(
    { 'mr-2': iconPosition === 'left' },
    { 'ml-2': iconPosition === 'right' },
    { 'h-4 w-4': size === 'sm' },
    { 'h-5 w-5': size === 'md' },
    { 'h-6 w-6': size === 'lg' },
  );

  // Icon visibility
  const iconElement =
    Icon !== null && iconEffect === 'static'
      ? React.createElement(Icon, { className: iconClass })
      : Icon !== null && iconEffect === 'active' && isActive
      ? React.createElement(Icon, { className: iconClass })
      : null;

  return (
    <button
      className={[
        layoutClass,
        sizingClass,
        spacingClass,
        typographyClass,
        borderClass,
        colorClass,
        effectClass,
      ].join(' ')}
      onClick={onClick}
    >
      {iconPosition === 'left' && iconElement}
      {text && <span>{text}</span>}
      {iconPosition === 'right' && iconElement}
    </button>
  );
};
