import * as RadixToast from '@radix-ui/react-toast';
import { Toast } from './Toast';
import s from './Toast.module.scss';
import { ToastItem } from './toast.types';

export interface ToastContainerProps {
  toasts: ToastItem[];
  removeToast: (id: string) => void;
  duration?: number;
}

export const ToastContainer = ({ toasts, removeToast, duration = 3000 }: ToastContainerProps) => {
  return (
    <RadixToast.Provider swipeDirection="right">
      {toasts.map(({ id, message }) => (
        <Toast key={id} message={message} duration={duration} onClose={() => removeToast(id)} />
      ))}
      <RadixToast.Viewport className={s.ToastViewport} />
    </RadixToast.Provider>
  );
};
