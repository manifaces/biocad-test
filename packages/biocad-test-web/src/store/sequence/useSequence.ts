import { useContext } from 'react';
import { SequenceContext } from './SequenceContext';

export function useSequence() {
  const context = useContext(SequenceContext);

  if (!context) {
    throw new Error('useSequence must be used within SequenceProvider');
  }

  return context;
}
