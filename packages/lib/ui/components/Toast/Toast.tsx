import * as RadixToast from '@radix-ui/react-toast';
import { useEffect, useState } from 'react';
import s from './Toast.module.scss';

export interface ToastProps {
  message: string;
  duration?: number;
  onClose?: () => void;
}

export const Toast = ({ message, duration = 2000, onClose }: ToastProps) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, [message]);

  return (
    <RadixToast.Root
      open={open}
      onOpenChange={(v) => {
        if (!v) onClose?.();
      }}
      duration={duration}
      asChild>
      <div className={s.Toast}>
        <RadixToast.Title className={s.Toast__message}>{message}</RadixToast.Title>
      </div>
    </RadixToast.Root>
  );
};
