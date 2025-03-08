import { useNavigate } from 'react-router';
import { Logo, Button } from '@/shared/ui';
import { Flex } from '@chakra-ui/react';

export const Header = () => {
    const navigate = useNavigate();
    return (
        <header>
            <Flex justifyContent="space-between" alignItems="center">
                <Logo />

                <Button onClick={() => navigate('/')}>home</Button>
            </Flex>
        </header>
    );
};
