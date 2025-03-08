import { useNavigate } from 'react-router';
import { Page, Button } from '@/shared/ui';
import { Heading, Separator, Flex } from '@chakra-ui/react';
import { useLetters } from '@/app/useLetters';
import { Letter } from '@/widgets/letter';
import { Header } from '@/widgets/header';

export const HomePage = () => {
    const navigate = useNavigate();
    const { lettersList, removeLetter } = useLetters();

    return (
        <>
            <Header />
            <Page>
                <Flex justifyContent="space-between" alignItems="center">
                    <Heading>Applications</Heading>
                    <Button onClick={() => navigate('/create-letter')}>Create New</Button>
                </Flex>
                <Separator />

                <Flex wrap="wrap">
                    {lettersList.map((letterText, index) => (
                        <Flex key={index} basis="552px">
                            <Letter text={letterText} removeLetter={() => removeLetter(index)} />
                        </Flex>
                    ))}
                </Flex>
            </Page>
        </>
    );
};
