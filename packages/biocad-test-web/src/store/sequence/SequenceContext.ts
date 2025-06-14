import { createContext } from 'react';
import { InputValues } from './sequence.types';

export interface SequenceContextType {
  aligned: InputValues | null;
  setAligned: (data: InputValues) => void;
}

export const SequenceContext = createContext<SequenceContextType | undefined>(undefined);
