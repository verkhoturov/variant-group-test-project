import { useLocalStorage } from '@uidotdev/usehooks';
import { CoverLetter } from '@/entities/CoverLetter/model';
import { CoverLettersContext } from '../contexts/CoverLettersContext';

export const CoverLettersProvider = ({ children }: { children: React.ReactNode }) => {
    const [coverLettersList, saveLettersList] = useLocalStorage<CoverLetter[]>('letters', []);

    const saveCoverLetter = (letter: CoverLetter) => {
        saveLettersList([...coverLettersList, letter]);
    };

    const removeCoverLetter = (id: string) => {
        const newList = coverLettersList.filter((letter) => letter.id !== id);
        saveLettersList(newList);
    };

    return (
        <CoverLettersContext.Provider
            value={{ coverLettersList, saveCoverLetter, removeCoverLetter }}
        >
            {children}
        </CoverLettersContext.Provider>
    );
};
