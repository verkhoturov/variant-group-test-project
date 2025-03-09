import dynamic from 'next/dynamic';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
const CoverLettersProvider = dynamic(
    () => import('./CoverLettersProvider').then((mod) => mod.CoverLettersProvider),
    { ssr: false },
);

export const Providers = (props: { children: React.ReactNode }) => (
    <ChakraProvider value={defaultSystem}>
        <CoverLettersProvider>{props.children}</CoverLettersProvider>
    </ChakraProvider>
);
