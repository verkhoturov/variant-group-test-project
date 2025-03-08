import { Field as UIField } from '@chakra-ui/react';
import * as React from 'react';

export interface FieldProps extends Omit<UIField.RootProps, 'label'> {
    label?: React.ReactNode;
    helperText?: React.ReactNode;
    errorText?: React.ReactNode;
    optionalText?: React.ReactNode;
}

export const Field = React.forwardRef<HTMLDivElement, FieldProps>(function Field(props, ref) {
    const { label, children, helperText, errorText, optionalText, ...rest } = props;

    return (
        <UIField.Root ref={ref} invalid={!!errorText} {...rest}>
            {label && (
                <UIField.Label>
                    {label}
                    <UIField.RequiredIndicator fallback={optionalText} />
                </UIField.Label>
            )}
            {children}
            {helperText && <UIField.HelperText>{helperText}</UIField.HelperText>}
            {errorText && <UIField.ErrorText>{errorText}</UIField.ErrorText>}
        </UIField.Root>
    );
});
