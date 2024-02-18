import { Picture } from '@components/Picture';
import type { FC } from 'react';

import { sources } from './constants';
import styles from './styles.module.scss';

export const Intro: FC = () => (
  <div className={styles.intro}>
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
