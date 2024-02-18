'use client';

import { AppContext } from '@contexts/AppContext';
import { Theme } from '@contexts/AppContext/constants';
import { getClassList } from '@utils/getClassList';
import type { FC } from 'react';
import { useContext } from 'react';

import { themeTitles } from './constants';
import styles from './styles.module.scss';

export const HeaderThemeToggler: FC = () => {
  const { theme, setTheme } = useContext(AppContext);

  return (
    <div className={styles['header-theme-toggler']}>
      {Object.values(Theme).map((themeItem) => {
        const isActive = theme === themeItem;
        const classList = getClassList([
          styles['header-theme-toggler-button'],
          isActive && styles.active,
        ]);

        return (
          <button
            className={classList}
            key={themeItem}
            onClick={() => setTheme(themeItem)}
          >
            {themeTitles[themeItem]}
          </button>
        );
      })}
    </div>
  );
};
