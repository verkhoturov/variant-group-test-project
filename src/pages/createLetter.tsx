import React from 'react';
import { Page } from '@/shared/ui';
import { ApplicationForm } from '@/widgets/applicationForm';
import { Letter } from '@/widgets/letter';
import { Heading, Separator, Flex } from '@chakra-ui/react';
import { Header } from '@/widgets/header';

export const CreateLetterPage = () => {
    const [letterText, setLetterText] = React.useState('');

    return (
        <>
            <Header />
            <Page>
                <Flex justifyContent="space-between" gap="32px">
                    <Flex basis="544px" flexDirection="column">
                        <Heading>New application</Heading>
                        <Separator />

                        <ApplicationForm setLetterText={setLetterText} />
                    </Flex>
                    <Flex basis="544px">
                        <Letter text={letterText} />
                    </Flex>
                </Flex>
            </Page>
        </>
    );
};
