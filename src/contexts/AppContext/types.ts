import { ComponentWithChildren } from "@type";
import { Theme } from "./constants";

export interface AppContextProps extends ComponentWithChildren {}

export interface AppContextState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}
