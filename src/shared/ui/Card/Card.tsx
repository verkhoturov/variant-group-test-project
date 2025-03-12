import { Box } from '@chakra-ui/react';

interface CardProps {
    isCompactView?: boolean;
    className?: string;
    children: React.ReactNode;
}

export const Card = ({ children, isCompactView, className }: CardProps) => {
    return (
        <Box
            className={className}
            bgColor="gray.100"
            borderRadius="12px"
            padding="12px"
            lg={{
                padding: '25px',
            }}
            maxHeight={isCompactView ? '240px' : 'auto'}
            height={isCompactView ? '240px' : 'auto'}
            overflow="hidden"
            width="100%"
        >
            {children}
        </Box>
    );
};
