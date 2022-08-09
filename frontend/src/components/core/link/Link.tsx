import classNames from 'classnames';
import { typography } from 'styled-system';

type LinkProps = {
  href: string;
  variant: 'light' | 'dark';
};

export const Link = ({ href, variant = 'light' }: LinkProps) => {
  const typographyClass = classNames('font-medium');
  const colorClass = classNames(
    { 'text-indigo-600 hover:text-indigo-500': variant === 'light' },
    //{ 'text-indigo-100 hover:text-indigo-300': variant === 'dark' },
  );
  return (
    <a href="/login" className={[typographyClass, colorClass].join(' ')}>
      Log in
    </a>
  );
};
