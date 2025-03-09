import { createContext } from 'react';
import { CoverLetter } from '@/entities/CoverLetter/model';

const defaultValue = {
    coverLettersList: [],
    saveCoverLetter: () => {},
    removeCoverLetter: () => {},
};

type CoverLettersContextType = {
    coverLettersList: CoverLetter[];
    saveCoverLetter: (letter: CoverLetter) => void;
    removeCoverLetter: (id: string) => void;
};

export const CoverLettersContext = createContext<CoverLettersContextType>(defaultValue);
