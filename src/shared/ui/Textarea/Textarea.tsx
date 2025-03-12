import React from 'react';
import { UseFormRegister, FieldValues, Path, Control, useWatch } from 'react-hook-form';
import { Textarea as UITextarea, TextareaProps as UITextareaProps } from '@chakra-ui/react';
import { Field } from '@/shared/ui';

interface TextareaProps<T extends FieldValues> extends UITextareaProps {
    register: UseFormRegister<T>;
    name: Path<T>;
    control: Control<T, unknown>;
    helperText?: string;
    showSymbolsCount?: boolean;
    maxLength?: number;
    label?: string;
}

export const Textarea = <T extends FieldValues>({
    control,
    register,
    helperText,
    showSymbolsCount,
    name,
    label,
    maxLength = 1200,
    ...props
}: TextareaProps<T>) => {
    const [isFocus, setFocus] = React.useState(false);
    const value = useWatch({
        control,
        name,
    });

    const description = showSymbolsCount ? `${value?.length ?? 0}/${maxLength}` : helperText;
    const isValid = showSymbolsCount ? (value?.length ?? 0) <= maxLength : true;

    const getBorderColor = () => {
        if (!isValid) return { border: 'red.100', shadow: '0px 0px 0px 4px #FEE4E2' };
        if (isFocus) return { border: 'green.200', shadow: '0px 0px 0px 4px #D3F8DF' };
        return { border: 'gray.300', shadow: '0px 1px 2px 0px #1018280D' };
    };

    return (
        <Field
            label={label}
            errorText={isValid ? '' : description}
            helperText={!isValid ? '' : description}
            invalid={!isValid}
        >
            <UITextarea
                {...props}
                {...register(name)}
                fontSize="16px"
                paddingTop="14px"
                paddingBottom="0"
                borderColor={getBorderColor().border}
                boxShadow={getBorderColor().shadow}
                focusRing={'outside'}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                focusVisibleRing={'none'}
            />
        </Field>
    );
};
