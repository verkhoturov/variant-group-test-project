import { useNavigate } from 'react-router';
import { Button } from '@/shared/ui';
import { Heading, Separator, Flex } from '@chakra-ui/react';
import { useCoverLetters } from '@/app/hooks/useCoverLetters';
import { LettersList } from '@/widgets/CoverLettersList';
import { Page } from '@/widgets/Page';

export const HomePage = () => {
    const navigate = useNavigate();
    const { coverLettersList, removeCoverLetter } = useCoverLetters();

    return (
        <Page>
            <Flex justifyContent="space-between" alignItems="center">
                <Heading>Applications</Heading>
                <Button onClick={() => navigate('/create-cover-letter')}>Create New</Button>
            </Flex>
            <Separator />

            <LettersList lettersList={coverLettersList} removeLetter={removeCoverLetter} />
        </Page>
    );
};
