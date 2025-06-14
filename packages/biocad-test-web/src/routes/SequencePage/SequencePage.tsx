import { SequenceProvider } from 'store/sequence';
import { SequenceContent } from './sections/SequenceContent';

export function SequencePage() {
  return (
    <SequenceProvider>
      <SequenceContent />
    </SequenceProvider>
  );
}
