import { TextField } from '@radix-ui/themes';
import clsx from 'clsx';
import { ChangeEventHandler } from 'react';

export interface InputProps {
  type?:
    | 'number'
    | 'text'
    | 'search'
    | 'time'
    | 'hidden'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'month'
    | 'password'
    | 'tel'
    | 'url'
    | 'week'
    | undefined;
  value: string;
  name: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export const Input = ({ type = 'text', value, name, placeholder, onChange, className }: InputProps) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    onChange?.(e.target.value);
  };

  return (
    <TextField.Root
      type={type}
      placeholder={placeholder}
      size={'3'}
      value={value}
      name={name}
      onChange={handleChange}
      className={clsx(className)}
    />
  );
};
