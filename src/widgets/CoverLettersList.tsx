import { Flex } from '@chakra-ui/react';
import { CoverLetterCard, CoverLetter } from '@/entities/CoverLetter';

interface LettersListProps {
    lettersList: CoverLetter[];
    removeLetter: (id: string) => void;
}

export const LettersList = ({ lettersList, removeLetter }: LettersListProps) => {
    return (
        <Flex wrap="wrap">
            {lettersList.map(({ text, id }) => (
                <Flex key={id} basis="552px">
                    <CoverLetterCard text={text} removeLetter={() => removeLetter(id)} />
                </Flex>
            ))}
        </Flex>
    );
};
