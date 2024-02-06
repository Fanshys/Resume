import { FC } from 'react';
import { Picture } from "@components/Picture";
import { sources } from "./constants";
import styles from './styles.module.scss';

export const Intro: FC = () => {
  return (
    <div className={styles['intro']}>
      <div className={styles['intro-text']}>
        <div className={styles['intro-subtitle']}>Привет, я</div>
        <h1 className={styles['intro-title']}>Дмитрий Шабалин</h1>
        <p className={styles['intro-description']}>Frontend-разработчик</p>
      </div>

      <div className={styles['intro-image-wrap']}>
        <Picture
          src='/images/intro.png'
          srcRetina='/images/intro.png'
          sources={sources}
          className={styles['intro-image-picture']}
          imgClassName={styles['intro-image']}
        />
      </div>
    </div>
  );
};
