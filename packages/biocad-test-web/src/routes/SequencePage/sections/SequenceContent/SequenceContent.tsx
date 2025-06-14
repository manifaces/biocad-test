import { SequenceForm } from 'features/SequenceForm';
import s from './SequenceContent.module.scss';
import { AlignmentVisualizer } from 'features/AlignmentVisualizer';
import { ThemeToggleButton } from '@biocad-test/ui';

export const SequenceContent = () => {
  return (
    <section className={s.SequenceContent}>
      <ThemeToggleButton />
      <h1 className={s.SequenceContent__title}>Инструмент для&nbsp;выравнивания аминокислотных последовательностей</h1>
      <p>
        В области вычислительной биологии и биоинформатики одним из важнейших методов анализа белковых
        последовательностей является их{' '}
        <a
          className={s.SequenceContent__link}
          href="https://biomolecula.ru/articles/12-metodov-v-kartinkakh-sukhaia-biologiia"
          target="_blank"
          rel="noreferrer">
          выравнивание
        </a>
        .
      </p>
      <p>
        Инструмент позволяет накладывать одну последовательность на другую так, чтобы максимально подчеркнуть их
        сходства и различия. <br />
        Каждое поле обязательно для заполнения и принимает строку, содержащую латинские буквы аминокислот{' '}
        <code>(A, R, N, D, C, E, Q, G, H, I, L, K, M, F, P, S, T, W, Y, V) </code> и символ <code>-</code>.
      </p>
      <SequenceForm />
      <AlignmentVisualizer />
    </section>
  );
};
