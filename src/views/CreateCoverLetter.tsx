import React from 'react';
import { useShallow } from 'zustand/shallow';
import { useMutation } from '@tanstack/react-query';
import { Flex } from '@chakra-ui/react';
import { Page } from '@/shared/ui';
import { ApplicationForm } from '@/widgets/ApplicationForm';
import { CoverLetterRequestParams, useCoverLettersStore } from '@/entities/CoverLetter/model';
import { createCoverLetter } from '@/entities/CoverLetter/api';
import { CoverLetterCard } from '@/widgets/CoverLetterCard';
import { Header } from '@/widgets/Header';
import { toast } from 'react-toastify';

export const CreateCoverLetterPage = () => {
    const { coverLettersList, saveCoverLetter } = useCoverLettersStore(
        useShallow((state) => ({
            coverLettersList: state.coverLettersList,
            saveCoverLetter: state.saveCoverLetter,
        })),
    );

    const query = useMutation({
        mutationFn: async (params: CoverLetterRequestParams) => await createCoverLetter(params),
    });

    // для мобильной версии, чтобы пользователя автоматически переносило к тексту письма
    const scrollToLetter = React.useCallback(() => {
        setTimeout(() => {
            const element = document.getElementById('new-letter');
            if (element) {
                const top = element.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        }, 100); // хак чтобы скролл сработал даже если часть блока с письмом уже видна
    }, []);

    React.useEffect(() => {
        if (query.isSuccess && query.data) {
            saveCoverLetter(query.data);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query.isSuccess, query.data]);

    React.useEffect(() => {
        if (query.isError) {
            const massage = query.error
                ? `Error: ${query.error.message}`
                : 'Something went wrong 🥲, try again later';

            toast.error(massage, {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: 'light',
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query.isError]);

    return (
        <Page>
            <Header coverLettersCount={coverLettersList.length} />
            <Flex
                flexDirection={'column'}
                gap="24px"
                paddingBottom={'24px'}
                md={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    gap: '32px',
                }}
            >
                <Flex basis="544px" flexDirection="column">
                    <ApplicationForm
                        isLoading={query.isPending}
                        createCoverLetterRequest={query.mutate}
                        scrollToLetter={scrollToLetter}
                        disabled={coverLettersList.length >= 5}
                    />
                </Flex>
                <Flex basis="544px" id="new-letter">
                    <CoverLetterCard isLoading={query.isPending} text={query.data?.text} />
                </Flex>
            </Flex>
        </Page>
    );
};
