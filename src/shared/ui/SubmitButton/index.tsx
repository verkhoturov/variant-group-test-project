import { Button, ButtonProps } from '@chakra-ui/react';
import { RepeatIcon } from '@/shared/ui';

interface SubmitButtonProps extends ButtonProps {
    isSubmitted: boolean;
}

export const SubmitButton = ({ children, loading, disabled, isSubmitted }: SubmitButtonProps) => {
    const getBackgroundColor = () => {
        if (loading) return 'green.200';
        if (isSubmitted) return 'white';
        if (!disabled) return 'green.200';
        return 'gray.300';
    };

    const getColor = () => {
        if (loading) return 'white';
        if (isSubmitted) return 'gray.900';
        if (!disabled) return 'white';
        return 'gray.600';
    };

    const getBorderColor = () => {
        if (loading) return 'green.200';
        if (isSubmitted) return 'gray.300';
        if (!disabled) return 'green.200';
        return 'gray.300';
    };

    return (
        <Button
            type="submit"
            loading={loading}
            size="xl"
            height="60px"
            fontSize="18px"
            rounded="md"
            opacity={1}
            gap="9px"
            backgroundColor={getBackgroundColor()}
            color={getColor()}
            borderColor={getBorderColor()}
            disabled={disabled}
        >
            {isSubmitted ? (
                <>
                    <RepeatIcon />
                    Try Again
                </>
            ) : (
                children
            )}
        </Button>
    );
};
