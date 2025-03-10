import React from 'react';
import { useMutation } from '@tanstack/react-query';
import { Flex } from '@chakra-ui/react';
import { useCoverLetters } from '@/app/hooks/useCoverLetters';
import { ApplicationForm } from '@/widgets/ApplicationForm';
import { CoverLetterRequestParams } from '@/entities/CoverLetter/model';
import { createCoverLetter } from '@/entities/CoverLetter/api';
import { CoverLetterCard } from '@/entities/CoverLetter/ui';
import { Page } from '@/widgets/Page';

export const CreateCoverLetterPage = () => {
    const { saveCoverLetter } = useCoverLetters();

    const query = useMutation({
        mutationFn: async (params: CoverLetterRequestParams) => await createCoverLetter(params),
    });

    React.useEffect(() => {
        if (query.isSuccess && query.data) {
            saveCoverLetter(query.data);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query.isSuccess, query.data]);

    return (
        <Page>
            <Flex justifyContent="space-between" gap="32px">
                <Flex basis="544px" flexDirection="column">
                    <ApplicationForm
                        isLoading={query.isPending}
                        coverLetterRequest={query.mutate}
                    />
                </Flex>
                <Flex basis="544px">
                    <CoverLetterCard isLoading={query.isPending} text={query.data?.text} />
                </Flex>
            </Flex>
        </Page>
    );
};
