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
                <Heading size={'5xl'}>Applications</Heading>
                <Button
                    onClick={() => router.push('/create-cover-letter')}
                    colorPalette="green"
                    rounded="md"
                    padding={"0 17px"}
                    gap="9px"
                >
                    <PlusIcon />
                    Create New
                </Button>
            </Flex>

            <Box py="15px">
                <Separator />
            </Box>

            <LettersList lettersList={coverLettersList} removeLetter={removeCoverLetter} />
        </Page>
    );
};
