import { useLocalStorage } from '@uidotdev/usehooks';
import { LettersContext } from './lettersContext';

export const LettersProvider = ({ children }: { children: React.ReactNode }) => {
    const [lettersList, saveLettersList] = useLocalStorage<string[]>('letters', []);

    const addLetter = (letter: string) => {
        saveLettersList([...lettersList, letter]);
    };

    const removeLetter = (index: number) => {
        const newList = lettersList.filter((_, i) => i !== index);
        saveLettersList(newList);
    };

    return (
        <LettersContext.Provider value={{ lettersList, addLetter, removeLetter }}>
            {children}
        </LettersContext.Provider>
    );
};
