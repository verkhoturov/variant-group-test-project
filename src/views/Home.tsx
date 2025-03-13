import { useRouter } from 'next/router';
import { useShallow } from 'zustand/shallow';
import { Page, PlusIcon } from '@/shared/ui';
import { Button, Heading, Separator, Flex, Box } from '@chakra-ui/react';
import { useCoverLettersStore } from '@/entities/CoverLetter/model';
import { LettersList } from '@/widgets/CoverLettersList';
import { Header } from '@/widgets/Header';
import { HitGoal } from '@/widgets/HitGoal';

export const HomePage = () => {
    const router = useRouter();
    const { coverLettersList, removeCoverLetter } = useCoverLettersStore(
        useShallow((state) => ({
            coverLettersList: state.coverLettersList,
            removeCoverLetter: state.removeCoverLetter,
        })),
    );

    return (
        <Page>
            <Header coverLettersCount={coverLettersList.length} />
            <Flex justifyContent="space-between" alignItems="center">
                <Heading
                    as="h1"
                    letterSpacing="-1.25px"
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
                    size="lg"
                    backgroundColor={'green.300'}
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

            <HitGoal coverLettersCount={coverLettersList.length} />
        </Page>
    );
};
