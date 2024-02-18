'use client';

import { getCookie } from '@helpers/getCookie';
import { setCookie } from '@helpers/setCookie';
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
    setCookie({ name: 'theme', value: newTheme });
  };

  const appContextProviderValue = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  useEffect(() => {
    const cookieTheme = getCookie('theme');

    if (cookieTheme) {
      setStateTheme(cookieTheme as Theme);
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
