import type { AppContextState } from './types';

export enum Theme {
  Light = 'light',
  Auto = 'auto',
  Dark = 'dark',
}

export const appContextInitialState: AppContextState = {
  theme: Theme.Dark,
  setTheme: () => {},
};
