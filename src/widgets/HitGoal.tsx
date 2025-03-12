import { useRouter } from 'next/router';
import { Heading, Text, Box, Flex, Button } from '@chakra-ui/react';
import { PlusIcon, Progress } from '@/shared/ui';

interface HitGoalProps {
    coverLettersCount: number;
}

export const HitGoal = ({ coverLettersCount }: HitGoalProps) => {
    const router = useRouter();

    if (coverLettersCount >= 5) return null;

    return (
        <Box backgroundColor={'green.100'} padding="24px 12px" borderRadius="12px" marginTop="48px">
            <Flex
                justifyContent="center"
                alignItems="center"
                lg={{
                    minHeight: '376px',
                }}
            >
                <Flex flexDirection="column" alignItems="center" gap="16px">
                    <Heading
                        as="h2"
                        letterSpacing="-1px"
                        fontSize="24px"
                        lineHeight="32px"
                        lg={{
                            fontSize: '36px',
                            lineHeight: '44px',
                        }}
                    >
                        Hit your goal
                    </Heading>

                    <Text
                        textAlign="center"
                        fontSize="14px"
                        lg={{
                            fontSize: '18px',
                        }}
                    >
                        Generate and send out couple more job applications <br /> today to get hired
                        faster
                    </Text>

                    <Button
                        onClick={() => router.push('/create-cover-letter')}
                        backgroundColor={'green.300'}
                        rounded="md"
                        padding={'0 29px'}
                        gap="14px"
                        size="xl"
                        height="60px"
                        fontSize="18px"
                    >
                        <PlusIcon />
                        Create New
                    </Button>

                    <Flex paddingTop="17px" flexDirection="column" alignItems="center" gap="8px">
                        <Progress max={5} count={coverLettersCount} />

                        <Text
                            textAlign="center"
                            fontSize="14px"
                            lg={{
                                fontSize: '18px',
                            }}
                        >
                            {coverLettersCount} out of 5
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    );
};
