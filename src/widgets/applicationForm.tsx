import React, { memo } from 'react';
import { UseMutateFunction } from '@tanstack/react-query';
import { Heading, Separator, Input, Textarea } from '@chakra-ui/react';
import { Field, Button } from '@/shared/ui';
import { CoverLetter } from '@/entities/CoverLetter/model';
import { CoverLetterRequestParams } from '@/entities/CoverLetter/model';
import { useForm } from 'react-hook-form';

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
            formState: { errors },
        } = useForm<CoverLetterRequestParams>();

        const onSubmit = handleSubmit((data) => {
            coverLetterRequest(data);
            setIsComplete(true);
        });

        return (
            <form onSubmit={onSubmit}>
                <Field label="Job Title" errorText={errors.jobTitle?.message}>
                    <Input
                        placeholder="Product manager"
                        {...register('jobTitle', {
                            required: 'Job title is required',
                            onChange: (e) => setJobTitle(e.target.value),
                        })}
                    />
                </Field>
                <Field label="Company" errorText={errors.companyName?.message}>
                    <Input
                        placeholder="Apple"
                        {...register('companyName', {
                            required: 'Company is required',
                            onChange: (e) => setCompanyName(e.target.value),
                        })}
                    />
                </Field>
                <Field label="I am good at..." errorText={errors.skillsList?.message}>
                    <Input
                        placeholder="HTML, CSS and doing things in time"
                        {...register('skillsList', {
                            required: 'Skills are required',
                        })}
                    />
                </Field>
                <Field label="Additional details" errorText={errors.details?.message}>
                    <Textarea
                        placeholder="Describe why you are a great fit or paste your bio"
                        {...register('details')}
                    />
                </Field>
                <Button type="submit" loading={isLoading}>
                    {isComplete ? 'Try Again' : 'Generate Now'}
                </Button>
            </form>
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
            <Heading>{getTitle()}</Heading>
            <Separator />

            {/* усложнение ради мемоизации, чтобы не было ререндера всей формы когда 
             вводим что-то в поля "Job Title" и "Company" */}
            <Form {...props} setJobTitle={setJobTitle} setCompanyName={setCompanyName} />
        </>
    );
};
