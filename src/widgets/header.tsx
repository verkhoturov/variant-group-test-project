import { useRouter } from 'next/router';
import { Logo, Button } from '@/shared/ui';
import { Flex } from '@chakra-ui/react';

export const Header = () => {
    const router = useRouter();
    return (
        <header>
            <Flex justifyContent="space-between" alignItems="center">
                <Logo />

                <Button onClick={() => router.push('/')}>home</Button>
            </Flex>
        </header>
    );
};
