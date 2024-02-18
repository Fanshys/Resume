import type { RefObject } from 'react';

export interface UseAnimateParams {
  ref: RefObject<HTMLElement>;
  animationClassName: string;
  classList?: string;
  params?: IntersectionObserverInit;
}
