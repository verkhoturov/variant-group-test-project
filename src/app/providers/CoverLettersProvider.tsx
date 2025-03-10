import { useCallback } from 'react';
import { useLocalStorage } from '@uidotdev/usehooks';
import { CoverLetter } from '@/entities/CoverLetter/model';
import { CoverLettersContext } from '../contexts/CoverLettersContext';

const LOCAL_STORAGE_KEY = 'variant-cover-letters';

export const CoverLettersProvider = ({ children }: { children: React.ReactNode }) => {
    const [coverLettersList, saveLettersList] = useLocalStorage<CoverLetter[]>(
        LOCAL_STORAGE_KEY,
        [],
    );

    const saveCoverLetter = useCallback(
        (letter: CoverLetter) => {
            saveLettersList([...coverLettersList, letter]);
        },
        [coverLettersList, saveLettersList],
    );

    const removeCoverLetter = useCallback(
        (id: string) => {
            const newList = coverLettersList.filter((letter) => letter.id !== id);
            saveLettersList(newList);
        },
        [coverLettersList, saveLettersList],
    );

    return (
        <CoverLettersContext.Provider
            value={{ coverLettersList, saveCoverLetter, removeCoverLetter }}
        >
            {children}
        </CoverLettersContext.Provider>
    );
};
