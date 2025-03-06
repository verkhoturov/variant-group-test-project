import { useNavigate } from 'react-router';
import { Page, Button } from '@/shared/ui';
import { Heading, Separator, Flex } from '@chakra-ui/react';

export const HomePage = () => {
    const navigate = useNavigate();

    return (
        <Page>
            <Flex justifyContent="space-between" alignItems="center">
                <Heading>Applications</Heading>
                <Button onClick={() => navigate('/create-letter')}>Create New</Button>
            </Flex>
            <Separator />
        </Page>
    );
};
