import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from '../../store/theme';
import { IconButton } from '../../components/IconButton';

export const ThemeToggleButton = () => {
  const { appearance, toggleAppearance } = useTheme();

  const isLight = appearance === 'light';

  return (
    <IconButton
      onClick={toggleAppearance}
      aria-label="Переключить тему"
      title={`Переключить на ${isLight ? 'тёмную' : 'светлую'} тему`}>
      {isLight ? <MoonIcon /> : <SunIcon />}
    </IconButton>
  );
};
