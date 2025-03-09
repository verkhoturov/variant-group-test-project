import React from 'react';
import { Input } from '@chakra-ui/react';
import { Textarea } from '@chakra-ui/react';
import { Field, Button } from '@/shared/ui';
import { getCoverLetterTemplate, CoverLetter } from '@/entities/CoverLetter';
import { useForm } from 'react-hook-form';

interface ApplicationFormValues {
    jobTitle: string;
    companyName: string;
    skillsList: string;
    details: string;
}

interface ApplicationFormProps {
    setLetter: (letter: CoverLetter) => void;
}

export const ApplicationForm = ({ setLetter }: ApplicationFormProps) => {
    const [isComplete, setIsComplete] = React.useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ApplicationFormValues>();

    const onSubmit = handleSubmit((data) => {
        const template = getCoverLetterTemplate(data);
        console.log(template);
        setLetter(template);
        setIsComplete(true);
    });

    return (
        <form onSubmit={onSubmit}>
            <Field label="Job Title" errorText={errors.jobTitle?.message}>
                <Input
                    placeholder="Product manager"
                    {...register('jobTitle', {
                        required: 'Job title is required',
                    })}
                />
            </Field>
            <Field label="Company" errorText={errors.companyName?.message}>
                <Input
                    placeholder="Apple"
                    {...register('companyName', {
                        required: 'Company is required',
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
            <Button type="submit">{isComplete ? 'Try Again' : 'Generate Now'}</Button>
        </form>
    );
};
