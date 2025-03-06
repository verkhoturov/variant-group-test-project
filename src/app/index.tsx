import { Routes, Route } from 'react-router';
import { Providers } from './providers';

import { HomePage } from '@/pages/home';
import { CreateLetterPage } from '@/pages/create-letter';

import './global.scss';

export const App = () => {
    return (
        <Providers>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/create-letter" element={<CreateLetterPage />} />
            </Routes>
        </Providers>
    );
};
