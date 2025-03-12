import React, { memo } from 'react';
import { UseMutateFunction } from '@tanstack/react-query';
import { Heading, Separator, Input, Box, Flex } from '@chakra-ui/react';
import { Field, SubmitButton, Textarea, RepeatIcon } from '@/shared/ui';
import { CoverLetter } from '@/entities/CoverLetter/model';
import { CoverLetterRequestParams } from '@/entities/CoverLetter/model';
import { useForm } from 'react-hook-form';

interface ApplicationFormProps {
    isLoading?: boolean;
    createCoverLetterRequest: UseMutateFunction<
        CoverLetter,
        Error,
        CoverLetterRequestParams,
        unknown
    >;
    scrollToLetter?: () => void;
    disabled: boolean;
}

const Form = memo(
    ({
        setJobTitle,
        setCompanyName,
        createCoverLetterRequest,
        isLoading,
        scrollToLetter,
        disabled,
    }: ApplicationFormProps & {
        setJobTitle: (title: string) => void;
        setCompanyName: (name: string) => void;
    }) => {
        const {
            register,
            handleSubmit,
            formState: { errors, isValid, isSubmitted },
            control,
        } = useForm<CoverLetterRequestParams>();

        const onSubmit = handleSubmit((data) => {
            createCoverLetterRequest(data);
            if (scrollToLetter) scrollToLetter();
        });

        return (
            <Flex as="form" onSubmit={onSubmit} flexDirection="column" gap="16px">
                <Flex justifyContent="space-between" gap="16px">
                    <Field label="Job title" errorText={errors.jobTitle?.message}>
                        <Input
                            placeholder="Product manager"
                            fontSize="16px"
                            boxShadow={'0px 1px 2px 0px #1018280D'}
                            borderColor={'gray.300'}
                            {...register('jobTitle', {
                                required: 'Job title is required',
                                onChange: (e) => setJobTitle(e.target.value),
                            })}
                            disabled={disabled}
                        />
                    </Field>
                    <Field label="Company" errorText={errors.companyName?.message}>
                        <Input
                            placeholder="Apple"
                            fontSize="16px"
                            boxShadow={'0px 1px 2px 0px #1018280D'}
                            borderColor={'gray.300'}
                            {...register('companyName', {
                                required: 'Company is required',
                                onChange: (e) => setCompanyName(e.target.value),
                            })}
                            disabled={disabled}
                        />
                    </Field>
                </Flex>
                <Field label="I am good at..." errorText={errors.skillsList?.message}>
                    <Input
                        placeholder="HTML, CSS and doing things in time"
                        fontSize="16px"
                        boxShadow={'0px 1px 2px 0px #1018280D'}
                        borderColor={'gray.300'}
                        {...register('skillsList', {
                            required: 'Skills are required',
                        })}
                        disabled={disabled}
                    />
                </Field>

                {/* Textarea вынесено в отельный компоненнт ради мемоизации, чтобы не было ререндера всей формы когда 
                вводим что-то поле "details" */}
                <Textarea<CoverLetterRequestParams>
                    label="Additional details"
                    name="details"
                    placeholder="Describe why you are a great fit or paste your bio"
                    rows={11}
                    resize="none"
                    showSymbolsCount
                    register={register}
                    control={control}
                    marginBottom="6px"
                    disabled={disabled}
                />

                <SubmitButton
                    loading={isLoading}
                    isSubmitted={isSubmitted}
                    disabled={!isValid || disabled}
                >
                    {disabled ? (
                        'Too many letters'
                    ) : isSubmitted ? (
                        <>
                            <RepeatIcon />
                            Try Again
                        </>
                    ) : (
                        'Generate Now'
                    )}
                </SubmitButton>
            </Flex>
        );
    },
);

export const ApplicationForm = (props: ApplicationFormProps) => {
    const [jobTitle, setJobTitle] = React.useState('');
    const [companyName, setCompanyName] = React.useState('');

    const getTitle = () => {
        if (jobTitle && companyName) return `${jobTitle}, ${companyName}`;
        if (jobTitle) return jobTitle;
        return 'New application';
    };

    return (
        <>
            <Heading
                as="h1"
                fontSize="24px"
                lineHeight="32px"
                color={jobTitle ? 'heading' : 'gray.500'}
                lg={{
                    fontSize: '36px',
                    lineHeight: '44px',
                    letterSpacing: '-1px',
                }}
            >
                {getTitle()}
            </Heading>

            <Box
                padding="8px 0 12px"
                lg={{
                    padding: '11px 0 16px',
                }}
            >
                <Separator />
            </Box>

            {/* усложнение ради мемоизации, чтобы не было ререндера всей формы когда 
             вводим что-то в поля "Job Title" и "Company" */}
            <Form {...props} setJobTitle={setJobTitle} setCompanyName={setCompanyName} />
        </>
    );
};
