import { BrowserRouter } from 'react-router';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { CoverLettersProvider } from './CoverLettersProvider';

export const Providers = (props: { children: React.ReactNode }) => (
    <ChakraProvider value={defaultSystem}>
        <BrowserRouter>
            <CoverLettersProvider>{props.children}</CoverLettersProvider>
        </BrowserRouter>
    </ChakraProvider>
);
