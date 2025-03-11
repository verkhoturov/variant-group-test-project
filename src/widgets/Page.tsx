import React from 'react';
import { Header } from '@/widgets/Header';
import { Box } from '@chakra-ui/react';

interface PageProps {
    children: React.ReactNode;
}

export const Page = ({ children }: PageProps) => (
    <Box maxW="1152px" px="16px" mx="auto">
        <Header />
        <main>{children}</main>
    </Box>
);
