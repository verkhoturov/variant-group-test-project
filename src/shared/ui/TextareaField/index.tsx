import { Field, FieldProps } from '@/shared/ui';

export const TextareaField = ({ children, ...props }: FieldProps) => {
    return (
        <Field errorText={''} helperText={'0/1200'} {...props}>
            {children}
        </Field>
    );
};
