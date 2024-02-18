import type { GetClassListParams } from './types';

export const getClassList = (classNames: GetClassListParams): string => {
  if (!classNames?.length) {
    return '';
  }

  const filteredParams = classNames.filter((param): param is string => !!param && typeof param === 'string');

  return filteredParams.join(' ');
};
