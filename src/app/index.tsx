import { Routes, Route } from 'react-router';
import { Providers } from './providers';

import { Home } from '@/pages/home';
import { CreateLetter } from '@/pages/create-letter';

import './global.scss';

export const App = () => {
    return (
        <Providers>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create-letter" element={<CreateLetter />} />
            </Routes>
        </Providers>
    );
};
