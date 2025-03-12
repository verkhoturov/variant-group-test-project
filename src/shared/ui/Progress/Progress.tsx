import { Flex, Box } from '@chakra-ui/react';
import { CheckIcon } from '../Icons';

interface ProgressProps {
    count: number;
    max: number;
    isDots?: boolean;
}

export const Progress = ({ count, max, isDots }: ProgressProps) => {
    if (count === max) {
        return <CheckIcon />;
    }

    return (
        <Flex alignItems={'center'} gap={isDots ? '4px' : '8px'}>
            {Array.from({ length: max }).map((_, index) => (
                <Box
                    key={index}
                    width={isDots ? '8px' : '32px'}
                    height="8px"
                    borderRadius={isDots ? '50%' : '4px'}
                    bgColor={'black'}
                    opacity={index < count ? 1 : 0.24}
                />
            ))}
        </Flex>
    );
};
