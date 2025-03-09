import { Routes, Route } from 'react-router';
import { Providers } from './providers';

import { HomePage } from '@/pages/Home';
import { CreateCoverLetterPage } from '@/pages/CreateCoverLetter';

import './global.scss';

export const App = () => {
    return (
        <Providers>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/create-letter" element={<CreateCoverLetterPage />} />
            </Routes>
        </Providers>
    );
};
