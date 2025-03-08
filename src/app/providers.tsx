import { BrowserRouter } from 'react-router';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { LettersProvider } from './lettersContext';

export const Providers = (props: { children: React.ReactNode }) => (
    <ChakraProvider value={defaultSystem}>
        <BrowserRouter>
            <LettersProvider>{props.children}</LettersProvider>
        </BrowserRouter>
    </ChakraProvider>
);
