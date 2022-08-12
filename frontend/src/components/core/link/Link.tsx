import classNames from 'classnames';
import { Link } from 'react-router-dom';

type TaiwindLinkProps = {
  href: string;
  text: string;
};

export const TailwindLink = ({ href, text }: TaiwindLinkProps) => {
  const typographyClass = classNames('font-medium');
  const colorClass = classNames(
    { 'text-indigo-600 hover:text-indigo-500': true },
    { 'dark:text-gray-100 dark:hover:text-gray-300': true },
  );
  return (
    <Link to={href} className={[typographyClass, colorClass].join(' ')}>
      {text}
    </Link>
  );
};
