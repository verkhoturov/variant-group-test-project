import React, { memo } from 'react';
import { UseMutateFunction } from '@tanstack/react-query';
import { Heading, Separator, Input, Box, Flex } from '@chakra-ui/react';
import { Field, Button, Textarea, RepeatIcon } from '@/shared/ui';
import { CoverLetter } from '@/entities/CoverLetter/model';
import { CoverLetterRequestParams } from '@/entities/CoverLetter/model';
import { useForm } from 'react-hook-form';

interface ApplicationFormProps {
    isLoading?: boolean;
    coverLetterRequest: UseMutateFunction<CoverLetter, Error, CoverLetterRequestParams, unknown>;
    scrollToLetter?: () => void;
}

const Form = memo(
    ({
        setJobTitle,
        setCompanyName,
        coverLetterRequest,
        isLoading,
        scrollToLetter,
    }: ApplicationFormProps & {
        setJobTitle: (title: string) => void;
        setCompanyName: (name: string) => void;
    }) => {
        const {
            register,
            handleSubmit,
            formState: { errors, isValid, isSubmitSuccessful },
            control,
        } = useForm<CoverLetterRequestParams>();

        const onSubmit = handleSubmit((data) => {
            coverLetterRequest(data);
            if(scrollToLetter) scrollToLetter();
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
                />

                <Button
                    type="submit"
                    loading={isLoading}
                    size="xl"
                    height="60px"
                    fontSize="18px"
                    rounded="md"
                    opacity={1}
                    gap="9px"
                    backgroundColor={
                        isLoading
                            ? 'green.200'
                            : isSubmitSuccessful
                              ? 'white'
                              : isValid
                                ? 'green.200'
                                : 'gray.300'
                    }
                    color={
                        isLoading
                            ? 'white'
                            : isSubmitSuccessful
                              ? 'gray.900'
                              : isValid
                                ? 'white'
                                : 'gray.600'
                    }
                    borderColor={
                        isLoading
                            ? 'green.200'
                            : isSubmitSuccessful
                              ? 'gray.300'
                              : isValid
                                ? 'green.200'
                                : 'gray.300'
                    }
                    disabled={!isValid}
                >
                    {isSubmitSuccessful ? (
                        <>
                            <RepeatIcon />
                            Try Again
                        </>
                    ) : (
                        'Generate Now'
                    )}
                </Button>
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
