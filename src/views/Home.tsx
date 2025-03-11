import { useRouter } from 'next/router';
import { Button, PlusIcon } from '@/shared/ui';
import { Heading, Separator, Flex, Box } from '@chakra-ui/react';
import { useCoverLetters } from '@/app/hooks/useCoverLetters';
import { LettersList } from '@/widgets/CoverLettersList';
import { Page } from '@/widgets/Page';

export const HomePage = () => {
    const router = useRouter();
    const { coverLettersList, removeCoverLetter } = useCoverLetters();

    return (
        <Page>
            <Flex justifyContent="space-between" alignItems="center">
                <Heading
                    as="h1"
                    fontSize="24px"
                    lineHeight="32px"
                    lg={{
                        fontSize: '48px',
                        lineHeight: '60px',
                    }}
                >
                    Applications
                </Heading>
                <Button
                    onClick={() => router.push('/create-cover-letter')}
                    colorPalette="green"
                    rounded="md"
                    padding={'0 8px'}
                    gap="4px"
                    lg={{
                        padding: '0 17px',
                        gap: '9px',
                    }}
                >
                    <PlusIcon />
                    Create New
                </Button>
            </Flex>

            <Box
                padding="15px 0 15px"
                lg={{
                    padding: '15px 0 24px',
                }}
            >
                <Separator />
            </Box>

            <LettersList lettersList={coverLettersList} removeLetter={removeCoverLetter} />
        </Page>
    );
};
