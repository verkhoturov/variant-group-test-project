import dynamic from 'next/dynamic';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ChakraProvider } from '@chakra-ui/react';
import { system } from '@/shared/ui/theme';

const CoverLettersProvider = dynamic(
    () => import('./CoverLettersProvider').then((mod) => mod.CoverLettersProvider),
    { ssr: false },
);

const queryClient = new QueryClient();

export const Providers = (props: { children: React.ReactNode }) => (
    <ChakraProvider value={system}>
        <QueryClientProvider client={queryClient}>
            <CoverLettersProvider>{props.children}</CoverLettersProvider>
        </QueryClientProvider>
    </ChakraProvider>
);
