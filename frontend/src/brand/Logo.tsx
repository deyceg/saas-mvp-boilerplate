import classNames from 'classnames';

type LogoProps = {
  size?: 'sm' | 'md' | 'lg';
};

export const LogoWithStrapline = ({ size = 'sm' }: LogoProps) => {
  const logoClass = classNames(
    'block lg:hidden w-auto',
    { 'h-8': size === 'sm' },
    { 'h-12': size === 'md' },
    { 'h-16': size === 'lg' },
  );
  const straplineClass = classNames(
    'hidden lg:block w-auto',
    { 'h-8': size === 'sm' },
    { 'h-12': size === 'md' },
    { 'h-16': size === 'lg' },
  );

  return (
    <>
      <img
        className={logoClass}
        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
        alt="Workflow"
      />
      <img
        className={straplineClass}
        src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
        alt="Workflow"
      />
    </>
  );
};

export const CenteredLogo = ({ size = 'sm' }: LogoProps) => {
  const logoClass = classNames(
    'mx-auto w-auto',
    { 'h-8': size === 'sm' },
    { 'h-12': size === 'md' },
    { 'h-16': size === 'lg' },
  );

  return (
    <img
      className={logoClass}
      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
      alt="Workflow"
    />
  );
};
