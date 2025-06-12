import { Button as RadixButton, type ButtonProps as RadixButtonProps } from '@radix-ui/themes';
import s from './Button.module.scss';
import clsx from 'clsx';

export type ButtonProps = RadixButtonProps;

export const Button = ({ variant = 'soft', size = '3', className, ...props }: ButtonProps) => {
  return <RadixButton variant={variant} size={size} className={clsx(s.Button, className)} {...props} />;
};
