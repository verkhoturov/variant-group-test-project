import dynamic from 'next/dynamic';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';

const CoverLettersProvider = dynamic(
    () => import('./CoverLettersProvider').then((mod) => mod.CoverLettersProvider),
    { ssr: false },
);

const queryClient = new QueryClient();

export const Providers = (props: { children: React.ReactNode }) => (
    <ChakraProvider value={defaultSystem}>
        <QueryClientProvider client={queryClient}>
            <CoverLettersProvider>{props.children}</CoverLettersProvider>
        </QueryClientProvider>
    </ChakraProvider>
);
