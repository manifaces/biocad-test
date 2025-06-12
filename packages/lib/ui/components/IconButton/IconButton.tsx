import { IconButton as RadixIconButton, type IconButtonProps as RadixIconButtonProps } from '@radix-ui/themes';
import s from './IconButton.module.scss';
import clsx from 'clsx';

export type IconButtonProps = RadixIconButtonProps;

export const IconButton = ({ variant = 'soft', size = '3', className, ...props }: IconButtonProps) => {
  return <RadixIconButton variant={variant} size={size} className={clsx(s.IconButton, className)} {...props} />;
};
