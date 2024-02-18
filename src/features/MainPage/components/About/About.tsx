'use client';

import { useAnimate } from '@hooks/useAnimate';
import type { FC } from 'react';
import { useRef } from 'react';

import { aboutText, stackItems } from './constants';
import styles from './styles.module.scss';

export const About: FC = () => {
  const firstRef = useRef(null);
  const secondRef = useRef(null);

  const classListFirst = useAnimate({
    ref: firstRef,
    classList: styles['about-grid-item-path'],
    animationClassName: 'animate-dash',
  });

  const classListSecond = useAnimate({
    ref: secondRef,
    classList: styles['about-grid-item-path'],
    animationClassName: 'animate-dash',
  });

  return (
    <div className={styles.about}>
      <div className="container">
        <div className={styles['about-intro']}>
          <h2 className={styles['about-title']}>
            Обо мне
          </h2>

          <p className={styles['about-description']}>{aboutText}</p>
        </div>

        <div className={styles['about-grid']}>
          <div className={styles['about-grid-item']}>
            <h3 className={styles['about-grid-item-title']}>
              Стек
            </h3>

            <p className={styles['about-grid-item-description']}>
              Некоторые из технологий, которые я использую в своей работе
            </p>

            <ul className={`${styles['about-grid-item-list']} ${styles.columns}`}>
              {stackItems.map((item) => (
                <li
                  key={item}
                  className={styles['about-grid-item-list-item']}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles['about-grid-item']}>
            <svg
              className={styles['about-grid-item-svg']}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 405.68 314.02"
              ref={firstRef}
            >
              <path
                className={classListFirst}
                /* eslint-disable-next-line max-len */
                d="M.12,313.21s69.43,17.83,180.25-224.84c0,0,16.36-40.69,18.33-8.08s11.44,73.93,11.44,73.93c0,0,19.2-122.92,38.68-151.72s99.11,262.59,99.11,262.59c0,0,8.47,49.39,53.65,48.41S51.46,232.34,51.46,232.34c0,0-73.41-32.75,139.48-48S12.5,250.41,12.5,250.41"
              />
            </svg>
          </div>

          <div className={styles['about-grid-item']}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={styles['about-grid-item-svg']}
              viewBox="0 0 390.89 224.8"
              ref={secondRef}
            >
              <path
                className={classListSecond}
                /* eslint-disable-next-line max-len */
                d="M390.68,224.35s-26.78-13.05-36.26-35.69-64.44-42.57-64.44-42.57c0,0-19.54-13.93-27.29-31.16,0,0-65.41-5.71-63.67-58.05S244.88.66,244.88.66c0,0,58.25-5.61,66.57,49.35s-56.89,59.02-56.89,59.02c0,0-11.22-.77-27.48-30.38,0,0-37.15-25.93-47.02-56.7,0,0-1.16-3.48-11.22,8.9,0,0-10.45,29.03-49.93,63.09s-43.46,54.44-43.46,54.44c0,0-28.15,62.28-74.48,71.24,0,0,3.49-6.23,12.46-13.7,0,0,7.97-25.91,16.19-35.37,0,0,32.63-15.69,29.89-45.34,0,0,14.95,33.13,34.63,32.38s53.31,16.44,53.31,16.44c0,0,30.64,32.13,66.76,37.12,0,0,116.08,3.49,126.05,10.21,0,0,11.96,1.99-15.69-13.45,0,0-42.1-9.22-63.52-22.92,0,0-56.05-11.46-62.28-19.93l-57.29-2.99s-21.67,7.47-6.73-21.92,17.94-40.11,17.94-40.11c0,0,8.72-11.46,18.43-18.93s10.92-28.4,10.92-28.4l-3.16-31.57"
              />
            </svg>
          </div>

          <div className={styles['about-grid-item']}>
            <h3 className={styles['about-grid-item-title']}>
              Опыт работы
            </h3>

            <p className={styles['about-grid-item-description']}>
              Хронология моей работы по компаниям
            </p>

            <ul className={styles['about-grid-item-list']}>
              <li className={`${styles['about-grid-item-list-item']} ${styles.grid}`}>
                <time className={styles['about-grid-item-list-item-time']}>2019&nbsp;-&nbsp;2022</time>

                <div className={styles['about-grid-item-list-item-content']}>
                  <span className={styles['about-grid-item-list-item-company']}>Amado</span>
                  <span className={styles['about-grid-item-list-item-position']}>Программист</span>
                  <span className={styles['about-grid-item-list-item-description']}>
                    Тут я начинал со сборки сайтов на Bitrix, постепенно переходя к разработке
                    полноценных web-приложений, углубляясь во Frontend.
                    <br />
                    {' '}
                    <br />
                    Последние полгода в компании провел в должности Team Lead&lsquo;a, команды из 4 человек
                    - обучал стажеров, помогал менее опытным ребятам.
                  </span>
                </div>
              </li>

              <li className={`${styles['about-grid-item-list-item']} ${styles.grid}`}>
                <time className={styles['about-grid-item-list-item-time']}>2022&nbsp;-&nbsp;...</time>

                <div className={styles['about-grid-item-list-item-content']}>
                  <span className={styles['about-grid-item-list-item-company']}>РБК</span>
                  <span className={styles['about-grid-item-list-item-position']}>Frontend-разработчик</span>
                  <span className={styles['about-grid-item-list-item-description']}>
                    В РБК погрузился целиком во Frontend-разработку, занимаясь сборкой и развитием сайтов на React.
                    Также занимался баннерной системой и внутренним модулем сбора пользовательских метрик.
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
