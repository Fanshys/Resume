import type { ComponentWithChildren } from '@type';

import type { Theme } from './constants';

export interface AppContextProps extends ComponentWithChildren {}

export interface AppContextState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}
