import { useRouter } from 'next/router';
import { Logo, HomeIcon } from '@/shared/ui';
import { IconButton, Box } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';

export const Header = () => {
    const router = useRouter();
    return (
        <Box as="header" py="32px">
            <Flex justifyContent="space-between" alignItems="center">
                <Logo />

                <IconButton onClick={() => router.push('/')} variant="outline" color="#344054">
                    <HomeIcon />
                </IconButton>
            </Flex>
        </Box>
    );
};
