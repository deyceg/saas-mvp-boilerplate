import { ErrorMessage } from '@hookform/error-message';
import { FieldErrors, RegisterOptions, useFormContext } from 'react-hook-form';
import { has } from 'lodash';
import classNames from 'classnames';
import { ExclamationCircleIcon } from '@heroicons/react/outline';
import { passwordStrength } from 'check-password-strength';
import { difference } from 'lodash';
import { Bar } from 'components/feedback/progress/Bar';
import { useState } from 'react';

type FieldPasswordProps = {
  id: string;
  label: string;
  register?: Function;
  options: RegisterOptions;
  errors?: FieldErrors;
  // All other props - allows passing props through *this* component
  [x: string]: any;
};

export const FieldPassword = ({
  id,
  label,
  register,
  options = {},
  errors,
  ...rest
}: FieldPasswordProps) => {
  const { clearErrors } = useFormContext();
  const [passwordStrengthResult, setPasswordStrengthResult] = useState(null);
  const onChange = (e) => {
    setPasswordStrengthResult(passwordStrength(e.target.value));
    if (isValidPassword(e.target.value)) {
      clearErrors('password');
    }
  };
  const isValidPassword = (password: string) => {
    /**
     * 0 = Too weak
     * 1 = Weak
     * 2 = Medium
     * 3 = Strong
     */
    return passwordStrength(password).id > 1;
  };

  const getPasswordErrors = (password: string): string[] => {
    const mediumDiversity = ['lowercase', 'uppercase', 'symbol', 'number'];
    const { contains } = passwordStrength(password);
    const diff: string[] = difference(mediumDiversity, contains);

    return diff.map((e) => `At least 1 ${e} character is required`);
  };

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
    'appearance-none block w-full px-3 py-2 caret-current text-sm',
    { '': has(errors, id) },
  );
  const errorClass = classNames('block text-red-500 dark:text-red-500');
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
          {...register(id, {
            ...options,
            required: `Password is required`,
            validate: {
              lowercase: (v) => {
                return (
                  getPasswordErrors(v).find((v) => /lowercase/.test(v)) || true
                );
              },
              uppercase: (v) => {
                return (
                  getPasswordErrors(v).find((v) => /uppercase/.test(v)) || true
                );
              },
              number: (v) => {
                return (
                  getPasswordErrors(v).find((v) => /number/.test(v)) || true
                );
              },
              symbol: (v) => {
                return (
                  getPasswordErrors(v).find((v) => /symbol/.test(v)) || true
                );
              },
            },
            onChange,
          })}
          type={'password'}
          aria-invalid={has(errors, id) ? 'true' : 'false'}
        />
        {has(errors, id) && (
          <ExclamationCircleIcon
            className={[errorClass, errorIconClass].join(' ')}
          />
        )}
      </div>
      <Bar
        steps={['Too Weak', 'Weak', 'Medium', 'Strong']}
        colors={['bg-red-500', 'bg-amber-500', 'bg-yellow-500', 'bg-green-500']}
        current={passwordStrengthResult?.id + 1}
      />
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
