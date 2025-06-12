import { createContext } from 'react';
import { Appearance } from './theme.types';

export interface ThemeContextValue {
  appearance: Appearance;
  setAppearance: (value: Appearance) => void;
  toggleAppearance: () => void;
}

export const ThemeContext = createContext<ThemeContextValue>({
  appearance: 'light',
  setAppearance: () => {},
  toggleAppearance: () => {}
});
