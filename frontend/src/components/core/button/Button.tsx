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
   * Control the alignment of the icon relative to it's position
   */
  iconAlignment?: 'left' | 'right';
  /**
   * Switch between fixed and percentage based widths
   */
  width?: 'fixed' | 'quarter' | 'half' | 'full';
  /**
   * Constrain the button width
   */
  size?: 'sm' | 'md' | 'lg';
  type?: 'button' | 'submit';
  /**
   * Control the button variant
   */
  variant?: 'solid' | 'ghost';
};

export const TailwindButton = ({
  text = null,
  onClick,
  isActive = false,
  Icon = null,
  iconPosition = 'left',
  iconEffect = 'static',
  iconAlignment = 'right',
  width = 'full',
  size = 'md',
  type = 'button',
  variant = 'solid',
}: TailwindButtonProps) => {
  // Classnames map to tailwindcss categories
  const layoutClass = classNames({
    'justify-center': true,
    flex: Icon === null,
    'inline-flex items-center': Icon !== null, // vertical align icon + text
  });
  const sizingClass = classNames({
    // percent
    'w-1/4': width === 'quarter',
    'w-1/2': width === 'half',
    'w-full': width === 'full',
    // fixed
    'w-24': width === 'fixed' && size === 'sm',
    'w-48': width === 'fixed' && size === 'md',
    'w-96': width === 'fixed' && size === 'lg',
  });
  const spacingClass = classNames({
    'py-2 px-4': size === 'sm',
    'py-3 px-5': size === 'md',
    'py-4 px-6': size === 'lg',
  });
  const typographyClass = classNames({
    'font-medium': true,
    'text-sm': size === 'sm',
    'text-md': size === 'md',
    'text-lg': size === 'lg',
  });
  const borderClass = classNames({
    'border rounded-md': true,
    // solid
    'border-transparent': variant === 'solid',
    // ghost
    '': variant === 'ghost',
  });
  const colorClass = classNames({
    // solid
    'bg-indigo-600 text-white': variant === 'solid',
    // ghost
    'bg-white border-gray-600 text-gray-600 dark:bg-gray-800 dark:text-gray-300':
      variant === 'ghost',
  });
  const effectClass = classNames({
    'shadow-sm': true,
    // solid
    'hover:bg-indigo-700': variant === 'solid',
    // ghost
    'hover:text-gray-700 dark:hover:text-gray-400': variant === 'ghost',
  });
  // Additional classes for specific component elements
  const iconClass = classNames({
    'flex-shrink-0': iconAlignment === iconPosition,
    'mr-2': iconPosition === 'left',
    'ml-2': iconPosition === 'right',
    'h-4 w-4': size === 'sm',
    'h-5 w-5': size === 'md',
    'h-6 w-6': size === 'lg',
  });
  const textClass = classNames({
    'flex-grow': iconAlignment === iconPosition,
    'border-gray-400': variant === 'ghost',
    'border-l': variant === 'ghost' && iconPosition === 'left',
    'border-r': variant === 'ghost' && iconPosition === 'right',
  });

  // Icon visibility
  // FIXME: May cause re-render
  const iconElement =
    Icon !== null && iconEffect === 'static'
      ? React.createElement(Icon, { className: iconClass })
      : Icon !== null && iconEffect === 'active' && isActive
      ? React.createElement(Icon, { className: iconClass })
      : null;
  return (
    <button
      type={type}
      disabled={isActive}
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
      {text && <span className={textClass}>{text}</span>}
      {iconPosition === 'right' && iconElement}
    </button>
  );
};
