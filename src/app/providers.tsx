import { BrowserRouter } from 'react-router';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';

export const Providers = (props: { children: React.ReactNode }) => (
    <ChakraProvider value={defaultSystem}>
        <BrowserRouter>{props.children}</BrowserRouter>
    </ChakraProvider>
);
