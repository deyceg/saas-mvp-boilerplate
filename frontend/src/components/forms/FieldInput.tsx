import { ErrorMessage } from '@hookform/error-message';
import { FieldErrors, RegisterOptions } from 'react-hook-form';
import { has } from 'lodash';
import classNames from 'classnames';
import { ExclamationCircleIcon } from '@heroicons/react/outline';

type FieldInputProps = {
  id: string;
  label: string;
  type: 'input' | 'email' | 'password';
  register?: Function;
  options: RegisterOptions;
  errors?: FieldErrors;
  // All other props - allows passing props through *this* component
  [x: string]: any;
};

export const FieldInput = ({
  id,
  label,
  type,
  register,
  options = {},
  errors,
  ...rest
}: FieldInputProps) => {
  // Classnames map to tailwindcss categories
  const layoutClass = classNames('flex flex-col group');
  const sizingClass = classNames();
  const spacingClass = classNames('space-y-4');
  const typographyClass = classNames(
    'text-sm font-medium',
    { 'text-gray-700': true },
    { 'dark:text-gray-200': true },
  );
  const borderClass = classNames(
    'border rounded-md',
    { 'border-gray-300': true },
    { 'dark:border-gray-600': true },
    {
      'dark:border-red-500 dark:border-2 border-red-500 border-2': has(
        errors,
        id,
      ),
    },
  );
  const colorClass = classNames(
    'bg-transparent',
    { 'bg-white': true },
    { 'dark:bg-gray-800': true },
  );
  const effectClass = classNames('shadow-sm');
  // Additional classes for specific component elements
  const labelClass = classNames('block');
  const inputClass = classNames(
    'appearance-none block w-full px-3 py-2 caret-current text-sm pr-10 focus:outline-none focus:ring focus:ring-indigo-300',
    { 'dark:border-red-500': has(errors, id) },
  );
  const errorClass = classNames(
    'active:border-none block text-red-500 dark:text-red-500',
  );
  const errorIconClass = classNames(
    'h-6 w-6 absolute inset-y-0 right-0 my-auto mr-2',
  );

  return (
    <div className={[layoutClass, spacingClass].join(' ')}>
      <label htmlFor={id} className={[typographyClass, labelClass].join(' ')}>
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          className={[borderClass, colorClass, effectClass, inputClass].join(
            ' ',
          )}
          {...register(id, options)}
          type={type}
          aria-invalid={has(errors, id) ? 'true' : 'false'}
        />
        {has(errors, id) && (
          <ExclamationCircleIcon
            className={[errorClass, errorIconClass].join(' ')}
          />
        )}
      </div>
      {/* {has(errors, id) && (
        <ErrorMessage
          className={[typographyClass, errorClass].join(' ')}
          as="span"
          errors={errors}
          name={id}
        />
      )} */}
      {has(errors, id) && (
        <ErrorMessage
          errors={errors}
          name={id}
          render={({ messages }) =>
            messages &&
            Object.entries(messages).map(([type, message]) => (
              <p
                role="alert"
                className={[typographyClass, errorClass].join(' ')}
                key={type}
              >
                {message}
              </p>
            ))
          }
        />
      )}
    </div>
  );
};
