import { TextField } from '@radix-ui/themes';
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
  placeholder?: string;
  onChange: (value: string) => void;
}

export const Input = ({ type = 'text', value, placeholder, onChange }: InputProps) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    onChange?.(e.target.value);
  };

  return <TextField.Root type={type} placeholder={placeholder} size={'3'} value={value} onChange={handleChange} />;
};
