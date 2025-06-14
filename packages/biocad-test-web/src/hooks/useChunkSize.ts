import { useCallback, useEffect, useState } from 'react';

export const useChunkSize = (charWidthPX = 30) => {
  const [node, setNode] = useState<HTMLDivElement | null>(null);

  const containerRef = useCallback((el: HTMLDivElement | null) => {
    setNode(el);
  }, []);

  const [chunkSize, setChunkSize] = useState(charWidthPX);

  useEffect(() => {
    if (!node) return;

    const update = () => {
      const width = node.offsetWidth;
      const perLine = Math.floor(width / charWidthPX);
      setChunkSize(Math.max(1, perLine));
    };

    update();

    const ro = new ResizeObserver(update);
    ro.observe(node);

    return () => {
      ro.disconnect();
    };
  }, [node, charWidthPX]);

  return { containerRef, chunkSize, node };
};
