import { useContext } from 'react';
import { CoverLettersContext } from '../contexts/CoverLettersContext';

export const useCoverLetters = () => {
    const ctx = useContext(CoverLettersContext);
    if (!ctx) {
        throw new Error('useLetters must be within LettersProvider');
    }
    return ctx;
};
