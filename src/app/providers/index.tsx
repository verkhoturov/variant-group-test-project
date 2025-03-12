import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ChakraProvider } from '@chakra-ui/react';
import { system } from '@/shared/ui/theme';

const queryClient = new QueryClient();

export const Providers = (props: { children: React.ReactNode }) => (
    <ChakraProvider value={system}>
        <QueryClientProvider client={queryClient}>{props.children}</QueryClientProvider>
    </ChakraProvider>
);
