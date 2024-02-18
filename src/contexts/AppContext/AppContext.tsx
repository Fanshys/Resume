'use client';

import type { FC } from 'react';
import {
  createContext, useEffect, useMemo, useState,
} from 'react';

import { appContextInitialState, Theme } from './constants';
import type { AppContextProps } from './types';

export const AppContext = createContext(appContextInitialState);

export const AppContextProvider: FC<AppContextProps> = (props) => {
  const { children } = props;
  const [theme, setStateTheme] = useState<Theme>(Theme.Auto);

  const setTheme = (newTheme: Theme) => {
    setStateTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const appContextProviderValue = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  useEffect(() => {
    const localStorageTheme = localStorage.getItem('theme');

    if (localStorageTheme) {
      setStateTheme(localStorageTheme as Theme);
    }
  }, []);

  useEffect(() => {
    if (document.body.classList.contains(theme)) {
      return;
    }

    document.body.classList.toggle('light', theme === Theme.Light);
    document.body.classList.toggle('dark', theme === Theme.Dark);
  }, [theme]);

  return (
    <AppContext.Provider value={appContextProviderValue}>
      {children}
    </AppContext.Provider>
  );
};
