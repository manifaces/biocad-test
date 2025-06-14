import { useEffect } from 'react';

export interface UseCopyOptions {
  onCopySuccess?: () => void;
  onCopyError?: (message: string) => void;
}

export const useCopyOnSelection = (node: HTMLElement | null, options: UseCopyOptions) => {
  useEffect(() => {
    const handleMouseUp = () => {
      const selection = window.getSelection();
      if (!selection || selection.rangeCount === 0) return;

      const range = selection.getRangeAt(0);
      const commonAncestor = range.commonAncestorContainer as HTMLElement;

      if (!node?.contains(commonAncestor)) return;

      const text = selection.toString().replace(/\s/g, '');
      if (!text) return;

      try {
        navigator.clipboard.writeText(text);
        options.onCopySuccess?.();
      } catch (err) {
        options.onCopyError?.('Непредвиденная ошибка');
      } finally {
        selection.removeAllRanges();
      }
    };

    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [node]);
};
