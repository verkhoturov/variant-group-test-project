import { useContext } from 'react';
import { LettersContext } from './lettersContext';

export const useLetters = () => {
    const ctx = useContext(LettersContext);
    if (!ctx) {
        throw new Error('useLetters must be within LettersProvider');
    }
    return ctx;
};
