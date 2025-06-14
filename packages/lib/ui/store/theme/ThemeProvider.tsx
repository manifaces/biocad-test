import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';

import { ReactNode, useState } from 'react';
import { Appearance } from './theme.types';
import { ThemeContext } from './ThemeContext';

export interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [appearance, setAppearance] = useState<Appearance>(() => {
    const saved = localStorage.getItem('app-theme') as Appearance | null;

    if (saved === 'light' || saved === 'dark') return saved;

    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  });

  const updateAppearance = (value: Appearance) => {
    setAppearance(value);
    localStorage.setItem('app-theme', value);
  };

  const toggleAppearance = () => {
    updateAppearance(appearance === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ appearance, setAppearance: updateAppearance, toggleAppearance }}>
      <Theme appearance={appearance} accentColor="blue" grayColor="slate" radius="medium">
        {children}
      </Theme>
    </ThemeContext.Provider>
  );
};
