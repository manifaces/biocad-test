import { useSequence } from 'store/sequence';
import s from './AlignmentVisualizer.module.scss';
import { charToColor, charToColorDark } from './visualizer.data';
import { CSSProperties, useMemo } from 'react';
import { splitSequence } from './utils';
import { useChunkSize } from 'hooks/useChunkSize';
import { useCopyOnSelection } from 'hooks/useCopyOnSelection';
import { ToastContainer, useTheme, useToastQueue } from '@biocad-test/ui';
import { useMediaQueryResult } from 'hooks/useMediaQueryResult';

export const AlignmentVisualizer = () => {
  const charWidthPX = 40;
  const isDesktop = useMediaQueryResult('(width >= 768px)');
  const { aligned } = useSequence();
  const { appearance } = useTheme();
  const { containerRef, node, chunkSize } = useChunkSize(charWidthPX);

  const { toasts, addToast, removeToast } = useToastQueue();

  useCopyOnSelection(node, {
    onCopySuccess: () => addToast('Последовательность скопирована в буфер обмена'),
    onCopyError: (msg: string) => addToast(msg)
  });

  const firstChunks = useMemo(() => {
    return aligned ? splitSequence(aligned.firstSeqValue, chunkSize) : [];
  }, [aligned?.firstSeqValue, chunkSize]);

  const secondChunks = useMemo(() => {
    return aligned ? splitSequence(aligned.secondSeqValue, chunkSize) : [];
  }, [aligned?.secondSeqValue, chunkSize]);

  if (!aligned) return null;

  const colors = appearance === 'dark' ? charToColorDark : charToColor;

  return (
    <div className={s.AlignmentVisualizer} ref={containerRef}>
      <h2 className={s.AlignmentVisualizer__title}>Визуализация</h2>
      {firstChunks.map((chunk, i) => (
        <div
          key={i}
          className={s.AlignmentVisualizer__block}
          style={
            {
              '--rows-size': chunk.length,
              '--cell-size': `${charWidthPX}px`
            } as CSSProperties
          }>
          <div className={s.AlignmentVisualizer__row}>
            <div className={s.AlignmentVisualizer__search}>
              <span>{chunk}</span>
            </div>
            {chunk.split('').map((char, j) => (
              <span key={j} className={s.AlignmentVisualizer__item} style={{ backgroundColor: colors[char] }}>
                {char}
              </span>
            ))}
          </div>
          <div className={s.AlignmentVisualizer__row}>
            <div className={s.AlignmentVisualizer__search}>
              <span>{secondChunks[i]}</span>
            </div>
            {(secondChunks[i] ?? '').split('').map((char, j) => {
              const mismatch = char !== chunk[j];
              return (
                <span
                  key={j}
                  className={s.AlignmentVisualizer__item}
                  style={{
                    backgroundColor: mismatch ? colors[char] : 'transparent'
                  }}>
                  {char}
                </span>
              );
            })}
          </div>
        </div>
      ))}
      <div className={s.AlignmentVisualizer__info}>
        {isDesktop
          ? 'Выделите часть последовательности, чтобы скопировать ее в буфер обмена'
          : 'В десктопной версии доступно копирование последовательностей'}
      </div>
      <ToastContainer toasts={toasts} removeToast={removeToast} duration={2000} />
    </div>
  );
};
