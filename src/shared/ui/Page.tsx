import React from 'react';
import { Box } from '@chakra-ui/react';

interface PageProps {
    children: React.ReactNode;
}

export const Page = ({ children }: PageProps) => (
    <Box maxW="1152px" px="16px" pb="32px" mx="auto">
        <main>{children}</main>
    </Box>
);
