import type { GetMediaParams } from './types';

export const getMedia = ({ from, to }: GetMediaParams): string => {
  const screenWidthMedias = [];

  if (from) {
    screenWidthMedias.push(`(min-width: ${from}px)`);
  }

  if (to) {
    screenWidthMedias.push(`(max-width: ${to}px)`);
  }

  return screenWidthMedias.join(' and ');
};
