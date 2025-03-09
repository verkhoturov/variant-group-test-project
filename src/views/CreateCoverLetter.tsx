import React from 'react';
import { Flex } from '@chakra-ui/react';
import { useCoverLetters } from '@/app/hooks/useCoverLetters';
import { ApplicationForm } from '@/widgets/ApplicationForm';
import { CoverLetter } from '@/entities/CoverLetter/model';
import { CoverLetterCard } from '@/entities/CoverLetter/ui';
import { Page } from '@/widgets/Page';

export const CreateCoverLetterPage = () => {
    const [newCoverLetterText, setNewCoverLetterText] = React.useState('');
    const { saveCoverLetter } = useCoverLetters();

    const setCoverLetter = (letter: CoverLetter) => {
        saveCoverLetter(letter);
        setNewCoverLetterText(letter.text);
    };

    return (
        <Page>
            <Flex justifyContent="space-between" gap="32px">
                <Flex basis="544px" flexDirection="column">
                    <ApplicationForm setCoverLetter={setCoverLetter} />
                </Flex>
                <Flex basis="544px">
                    <CoverLetterCard text={newCoverLetterText} />
                </Flex>
            </Flex>
        </Page>
    );
};
