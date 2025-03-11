import React, { memo } from 'react';
import { UseMutateFunction } from '@tanstack/react-query';
import { Heading, Separator, Input, Textarea, Box, Flex } from '@chakra-ui/react';
import { Field, Button } from '@/shared/ui';
import { CoverLetter } from '@/entities/CoverLetter/model';
import { CoverLetterRequestParams } from '@/entities/CoverLetter/model';
import { useForm, useWatch } from 'react-hook-form';

interface ApplicationFormProps {
    isLoading?: boolean;
    coverLetterRequest: UseMutateFunction<CoverLetter, Error, CoverLetterRequestParams, unknown>;
}

const Form = memo(
    ({
        setJobTitle,
        setCompanyName,
        coverLetterRequest,
        isLoading,
    }: ApplicationFormProps & {
        setJobTitle: (title: string) => void;
        setCompanyName: (name: string) => void;
    }) => {
        const [isComplete, setIsComplete] = React.useState(false);

        const {
            register,
            handleSubmit,
            formState: { errors, isValid },
            control,
        } = useForm<CoverLetterRequestParams>();

        const detailsValue = useWatch({
            control,
            name: 'details',
        });

        const onSubmit = handleSubmit((data) => {
            coverLetterRequest(data);
            setIsComplete(true);
        });

        return (
            <Flex as="form" onSubmit={onSubmit} flexDirection="column" gap="16px">
                <Flex justifyContent="space-between" gap="16px">
                    <Field label="Job title" errorText={errors.jobTitle?.message}>
                        <Input
                            placeholder="Product manager"
                            fontSize="16px"
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
                        {...register('skillsList', {
                            required: 'Skills are required',
                        })}
                    />
                </Field>
                <Field
                    label="Additional details"
                    errorText={errors.details?.message}
                    helperText={`${detailsValue?.length ?? 0}/1200`}
                    marginBottom="4px"
                >
                    <Textarea
                        placeholder="Describe why you are a great fit or paste your bio"
                        fontSize="16px"
                        resize="none"
                        paddingTop="14px"
                        paddingBottom={0}
                        rows={11}
                        {...register('details')}
                    />
                </Field>

                <Button
                    type="submit"
                    loading={isLoading}
                    size="xl"
                    height="60px"
                    fontSize="18px"
                    rounded="md"
                    opacity={1}
                    backgroundColor={isValid ? 'green' : 'gray.300'}
                    color={isValid ? 'white' : 'gray.600'}
                    disabled={!isValid}
                >
                    {isComplete ? 'Try Again' : 'Generate Now'}
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
