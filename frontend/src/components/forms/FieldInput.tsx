import { ErrorMessage } from '@hookform/error-message';
import { FieldErrors, RegisterOptions } from 'react-hook-form';
import FieldError from './FieldError';
import { has } from 'lodash';
import classNames from 'classnames';
import { ExclamationCircleIcon } from '@heroicons/react/outline';

type InputProps = {
  id: string;
  label: string;
  type: 'email' | 'password';
  register?: Function;
  options: RegisterOptions;
  errors?: FieldErrors;
  /**
   * Control the theme
   */
  variant?: 'light' | 'dark';
  // All other props
  [x: string]: any;
};

export const FieldInput = ({
  id,
  label,
  type,
  register,
  options = {},
  errors,
  variant = 'light',
  ...rest
}: InputProps) => {
  // Classnames broadly map to tailwindcss categories.
  const layoutClass = classNames('flex flex-col');
  const sizingClass = classNames();
  const spacingClass = classNames('space-y-4');
  const typographyClass = classNames(
    'text-sm font-medium',
    { 'text-gray-700': variant === 'light' },
    { 'text-gray-200': variant === 'dark' },
  );
  const borderClass = classNames(
    'border rounded-md',
    { 'border-gray-300': variant === 'light' },
    { 'border-gray-700': variant === 'dark' },
  );
  const colorClass = classNames(
    'bg-transparent',
    { 'bg-white': variant === 'light' },
    { 'bg-gray-800': variant === 'dark' },
  );
  const effectClass = classNames('shadow-sm');
  const labelClass = classNames('block');
  const inputClass = classNames(
    'appearance-none block w-full px-3 py-2 caret-current text-sm',
  );
  const errorClass = classNames('block');
  return (
    <>
      <div className={[layoutClass, spacingClass].join(' ')}>
        <label htmlFor={id} className={[typographyClass, labelClass].join(' ')}>
          {label}
        </label>
        <div className="relative">
          <input
            className={[borderClass, colorClass, effectClass, inputClass].join(
              ' ',
            )}
            {...register(id, options)}
            type={type}
            aria-invalid={has(errors, id) ? 'true' : 'false'}
          />
          <ExclamationCircleIcon className="text-red-500 h-6 w-6 absolute inset-y-0 right-0 my-auto mr-2" />
        </div>
        <ErrorMessage errors={errors} name={id} render={FieldError} />
      </div>
    </>
  );
};
