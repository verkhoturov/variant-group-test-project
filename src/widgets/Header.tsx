import { memo } from 'react';
import { useRouter } from 'next/router';
import { Logo, HomeIcon, Progress } from '@/shared/ui';
import { IconButton, Box, Text } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';

interface HeaderProps {
    coverLettersCount: number;
}

export const Header = memo(({ coverLettersCount }: HeaderProps) => {
    const router = useRouter();

    return (
        <Box as="header" maxW="1152px" mx="auto" py="16px" lg={{ py: '32px' }}>
            <Flex justifyContent="space-between" alignItems="center">
                <Logo />

                <Flex justifyContent="space-between" alignItems="center" gap="24px">
                    <Flex
                        justifyContent="space-between"
                        alignItems="center"
                        gap="16px"
                        display={'none'}
                        md={{
                            display: 'flex',
                        }}
                    >
                        <Text>{coverLettersCount}/5 applications generated</Text>
                        <Progress max={5} count={coverLettersCount} isDots />
                    </Flex>
                    <IconButton
                        onClick={() => router.push('/')}
                        variant="outline"
                        color="#344054"
                        aria-label="Go to home"
                    >
                        <HomeIcon />
                    </IconButton>
                </Flex>
            </Flex>
        </Box>
    );
});
