import { Flex } from '@chakra-ui/react';
import { CoverLetter } from '@/entities/CoverLetter/model';
import { CoverLetterCard } from '@/entities/CoverLetter/ui';

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
