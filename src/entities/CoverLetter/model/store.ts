import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CoverLetter } from './types';

const LOCAL_STORAGE_KEY = 'variant-cover-letters';

interface CoverLettersState {
    coverLettersList: CoverLetter[];
    saveCoverLetter: (letter: CoverLetter) => void;
    removeCoverLetter: (id: string) => void;
}

export const useCoverLettersStore = create<CoverLettersState>()(
    persist(
        (set, get) => ({
            coverLettersList: [],
            saveCoverLetter: (letter) => {
                set({ coverLettersList: [...get().coverLettersList, letter] });
            },
            removeCoverLetter: (id) => {
                set({
                    coverLettersList: get().coverLettersList.filter((letter) => letter.id !== id),
                });
            },
        }),
        {
            name: LOCAL_STORAGE_KEY,
        },
    ),
);
