import React from 'react';
import { Heading, Separator, Flex } from '@chakra-ui/react';
import { useCoverLetters } from '@/app/hooks/useCoverLetters';
import { ApplicationForm } from '@/widgets/ApplicationForm';
import { CoverLetterCard, CoverLetter } from '@/entities/CoverLetter';
import { Page } from '@/widgets/Page';

export const CreateCoverLetterPage = () => {
    const [letterText, setLetterText] = React.useState('');
    const { saveCoverLetter } = useCoverLetters();

    const setLetter = (letter: CoverLetter) => {
        saveCoverLetter(letter);
        setLetterText(letter.text);
    };

    return (
        <Page>
            <Flex justifyContent="space-between" gap="32px">
                <Flex basis="544px" flexDirection="column">
                    <Heading>New application</Heading>
                    <Separator />

                    <ApplicationForm setLetter={setLetter} />
                </Flex>
                <Flex basis="544px">
                    <CoverLetterCard text={letterText} />
                </Flex>
            </Flex>
        </Page>
    );
};
