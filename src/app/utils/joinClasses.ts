
export const joinClasses = (...classes: [boolean, string][]) => classes
  .filter(([condition]) => condition)
  .map(([, className]) => className)
  .join(' ');
    