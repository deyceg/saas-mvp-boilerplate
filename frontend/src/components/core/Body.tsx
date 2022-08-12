import classNames from 'classnames';
import React, { useEffect } from 'react';

/**
 * Decorate `<body\> element
 */
const Body = ({ children }) => {
  const bodyClass = classNames(
    { 'h-full': true },
    { 'bg-gray': true },
    { 'dark:bg-gray-800': true },
  );

  /**
   * Add necessary tailwindcss classes to <body>
   *
   */
  useEffect(() => {
    document.body.classList.add(...bodyClass.split(' '));

    return function cleanup() {
      document.body.classList.add(...bodyClass.split(' '));
    };
  }, [bodyClass]);

  return <>{children}</>;
};

export default Body;
