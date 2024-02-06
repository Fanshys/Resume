"use client";

import { FC, useContext } from 'react';
import styles from './styles.module.scss';
import { AppContext } from "@contexts/AppContext";
import { Theme } from "@contexts/AppContext/constants";
import { getClassList } from "@utils/getClassList";
import { themeTitles } from "./constants";

export const HeaderThemeToggler: FC = () => {
  const { theme, setTheme } = useContext(AppContext);

  return (
    <div className={styles['header-theme-toggler']}>
      {Object.values(Theme).map((themeItem) => {
        const isActive = theme === themeItem;
        const classList = getClassList([
          styles['header-theme-toggler-button'],
          isActive && styles['active']
        ]);

        return (
          <button
            className={classList}
            key={themeItem}
            onClick={() => setTheme(themeItem)}
          >
            {themeTitles[themeItem]}
          </button>
        )
      })}
    </div>
  );
};
