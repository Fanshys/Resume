import { getClassList } from '@utils/getClassList';
import { useEffect, useState } from 'react';

import type { UseAnimateParams } from './types';

export const useAnimate = (params: UseAnimateParams): string => {
  const {
    ref,
    classList: initClassList,
    animationClassName,
    params: initParams = {},
  } = params;

  const [isInViewport, setIsInViewport] = useState(false);

  const intersectionObserverParams = {
    threshold: 0.8,
    ...initParams,
  };
  const classList = getClassList([
    initClassList,
    isInViewport && animationClassName,
  ]);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInViewport(entry.isIntersecting);
          observer.disconnect();
        }
      });
    }, intersectionObserverParams);

    observer.observe(ref.current);
  }, [ref]);

  return classList;
};
