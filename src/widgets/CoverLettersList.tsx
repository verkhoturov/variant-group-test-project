import { Flex } from '@chakra-ui/react';
import { CoverLetter } from '@/entities/CoverLetter/model';
import { CoverLetterCard } from '@/widgets/CoverLetterCard';

interface LettersListProps {
    lettersList: CoverLetter[];
    removeLetter: (id: string) => void;
}

export const LettersList = ({ lettersList, removeLetter }: LettersListProps) => {
    return (
        <Flex
            wrap="wrap"
            gapY="15px"
            lg={{
                gapX: '16px',
                gapY: '24px',
            }}
        >
            {lettersList.map(({ text, id }) => (
                <Flex
                    key={id}
                    flexBasis="100%"
                    maxWidth="100%"
                    lg={{
                        flexBasis: '552px',
                        maxWidth: '552px',
                    }}
                >
                    <CoverLetterCard
                        text={text}
                        removeLetter={() => removeLetter(id)}
                        isCompactView
                    />
                </Flex>
            ))}
        </Flex>
    );
};
