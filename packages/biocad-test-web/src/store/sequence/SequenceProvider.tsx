import { ReactNode, useState } from 'react';
import { SequenceContext } from './SequenceContext';
import { InputValues } from './sequence.types';

export const SequenceProvider = ({ children }: { children: ReactNode }) => {
  const [aligned, setAligned] = useState<InputValues | null>(null);

  return <SequenceContext.Provider value={{ aligned, setAligned }}>{children}</SequenceContext.Provider>;
};
