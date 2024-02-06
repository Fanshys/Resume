"use client";
import { createContext, FC, useEffect, useState } from 'react';
import { AppContextProps } from './types';
import { appContextInitialState, Theme } from "./constants";

export const AppContext = createContext(appContextInitialState);


export const AppContextProvider: FC<AppContextProps> = (props) => {
  const { children } = props;
  const [theme, setStateTheme] = useState<Theme>(Theme.Auto);

  const setTheme = (theme: Theme) => {
    setStateTheme(theme);
    localStorage.setItem('theme', theme);
  };

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
    <AppContext.Provider value={{ theme, setTheme }}>
      {children}
    </AppContext.Provider>
  );
};
