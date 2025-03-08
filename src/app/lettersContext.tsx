import { createContext } from 'react';

const defaultValue = {
    lettersList: [],
    addLetter: () => {},
    removeLetter: () => {},
};

type LettersContextType = {
    lettersList: string[];
    addLetter: (letter: string) => void;
    removeLetter: (index: number) => void;
};

export const LettersContext = createContext<LettersContextType>(defaultValue);
