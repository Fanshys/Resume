'use client';

import { Picture } from '@components/Picture';
import { useAnimate } from '@hooks/useAnimate';
import type { FC } from 'react';
import { useRef } from 'react';

import { sources } from './constants';
import styles from './styles.module.scss';

export const Intro: FC = () => {
  const ref = useRef(null);
  const classList = useAnimate({
    ref,
    animationClassName: 'animate-dash',
    classList: styles['intro-path'],
  });

  return (
    <div className={styles.intro}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448.36 65.77"
        className={styles['intro-svg']}
        ref={ref}
      >
        <path
          className={classList}
          /* eslint-disable-next-line max-len */
          d="M0,65.27l35.42-.4h31.27l32.54-.49,21.81-.64,4.09-.42,9.11-1.27,4.38-.78,5.72-.49h22.87l4.02-.56s.35.28,3.46-3.04,10.09-11.15,11.15-10.59-1.69-.35,5.44-1.76,5.01-.92,5.01-.92c0,0,4.8-1.98,6.07-3.88s9.11-5.51,9.11-5.51l6.35-2.61s1.2-.35,2.12,0,.49,1.06,3.6,2.26,1.27,1.36,4.5,1.85,6.32.19,6.32.19c0,0,.1.31,1.28-.12s-3.34,2.26-7.34,3.11-9.88,1.55-9.88,1.55c0,0-29.65,9.51-30.78,10.26s-2.4,1.98-2.35,2.87.14.85.94,1.08,21.13-3.01,22.26-4.19,12.05-4.05,17.6-7.86,17.36-12.42,17.36-12.42c0,0,12-11.51,14.19-12.56s12.28-7.34,13.48-9.04,2.89-2.33,4.52-6.14,4.38-1.62,4.38-1.62c0,0,17.86,12.56,21.88,19.27s11.51,13.06,15.18,22.94-32.4-5.02-32.4-5.02c0,0-10.87-9.23-26.4-6.69s-15.11,1.57-25.04,6.69,4.56,1.17,2.31,2.01,1.32-.05,1.32-.05c0,0,4.99-.85,19.86,6.54s14.01,2.52,25.09,8.98,7.34-3.64,17.19-3.39,36.18.53,39.95-.85,4.59-.18.95-5.82-15.21-5.22-19.06-11.86-9.78-13.06-16.34-10.48,2.68-.95,2.68-.95c0,0,7.34-8.36,11.93-7.94s5.82,3.53,8.26,4.98,5.36.28,6.85-.74,3.07.6,3.07.6l1.59,2.51s1.87,1.73,4.31.53,4.02-3.95,4.02-3.95c0,0,1.62-2.19,4.31,1.13s8.54,7.76,8.54,7.76c0,0,8.22,9.74,8.58,10.69s2.4,3.46-1.98,2.93-8.93-.32-11.79.28-10.66.64-11.12,2.01-3.42,1.69-.6,3.11,16.48-2.72,16.48-2.72c0,0,4.34-1.45,7.02,1.06s-.85,4.45,3.25,5.93,2.86-3,15.39,3.71,6.78,4.91,15.53,6.18,8.82.21,17.33,2.54,30.18,1.27,30.18,1.27"
        />
      </svg>

      <div className={`container ${styles['intro-wrap']}`}>
        <div className={styles['intro-text']}>
          <div className={styles['intro-subtitle']}>Привет, я</div>
          <h1 className={styles['intro-title']}>Дмитрий Шабалин</h1>
          <p className={styles['intro-description']}>Frontend-разработчик</p>
        </div>

        <div className={styles['intro-right']}>
          <div className={styles['intro-image-wrap']}>
            <Picture
              src="/images/intro.png"
              srcRetina="/images/intro.png"
              sources={sources}
              className={styles['intro-image-picture']}
              imgClassName={styles['intro-image']}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
