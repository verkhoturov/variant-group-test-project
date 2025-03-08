import React from 'react';
import { Input } from '@chakra-ui/react';
import { Textarea } from '@chakra-ui/react';
import { Field, Button } from '@/shared/ui';
import { useForm } from 'react-hook-form';
import { useLetters } from '@/app/useLetters';

interface ApplicationFormValues {
    jobTitle: string;
    companyName: string;
    skillsList: string;
    details: string;
}

const getTemplate = (values: ApplicationFormValues) => `
Dear ${values.companyName} Team,

I am writing to express my interest in the ${values.jobTitle} position.

My experience in the realm combined with my skills in ${values.skillsList} make me a strong candidate for this role.

${values.details}

I am confident that my skills and enthusiasm would translate into valuable contributions to your esteemed organization.

Thank you for considering my application. I eagerly await the opportunity to discuss my qualifications further.
`;

interface ApplicationFormProps {
    setLetterText: (text: string) => void;
}

export const ApplicationForm = ({ setLetterText }: ApplicationFormProps) => {
    const [isComplete, setIsComplete] = React.useState(false);

    const { addLetter } = useLetters();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ApplicationFormValues>();

    const onSubmit = handleSubmit((data) => {
        const template = getTemplate(data);
        console.log(template);
        setLetterText(template);
        addLetter(template);
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
