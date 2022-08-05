/**
 * Capitalize the first letter in a string.
 *
 * @param s c
 * @returns
 */
export const capitalizeFirst = (s = ''): string => {
  return !!s ? s.charAt(0).toUpperCase() + s.slice(1) : '';
};
