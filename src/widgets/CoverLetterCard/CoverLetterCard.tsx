import { Card, TrashIcon, CopyIcon, Loader } from '@/shared/ui';
import { useCopyToClipboard } from '@uidotdev/usehooks';
import { Button, Text, Box } from '@chakra-ui/react';

import styles from './CoverLetterCard.module.scss';

const getPreviewText = (text: string) => `${text.substring(0, 240)}...`;

const ActionButton = ({
    children,
    disabled,
    onClick,
}: {
    children: React.ReactNode;
    disabled?: boolean;
    onClick: () => void;
}) => (
    <Button
        onClick={onClick}
        disabled={disabled}
        size="sm"
        variant="plain"
        fontSize="14px"
        gap="9px"
        padding="0"
        lg={{
            fontSize: '16px',
        }}
    >
        {children}
    </Button>
);

interface CoverLetterProps {
    text: string | undefined;
    isLoading?: boolean;
    isCompactView?: boolean;
    removeLetter?: () => void;
}

export const CoverLetterCard = ({
    text,
    isLoading,
    isCompactView,
    removeLetter,
}: CoverLetterProps) => {
    const [copiedText, copyToClipboard] = useCopyToClipboard();
    const hasCopiedText = Boolean(copiedText);

    const getContent = () => {
        if (text && isCompactView) return getPreviewText(text);
        if (text) return text;
        return 'Your personalized job application will appear here...';
    };

    if (isLoading) {
        return (
            <Card className={styles.card} isCompactView={isCompactView}>
                <Loader />
            </Card>
        );
    }

    return (
        <Card className={styles.card} isCompactView={isCompactView}>
            <Text whiteSpace="break-spaces" fontSize="14px" lg={{ fontSize: '18px' }}>
                {getContent()}
            </Text>

            <Box
                className={styles.controlButtons}
                bgColor="gray.100"
                height="58px"
                padding="0 12px 12px"
                lg={{
                    height: '46px',
                    padding: '0 24px 18px',
                }}
                justifyContent={removeLetter ? 'space-between' : 'flex-end'}
            >
                {removeLetter && (
                    <ActionButton onClick={removeLetter}>
                        <TrashIcon />
                        Delete
                    </ActionButton>
                )}

                {text && (
                    <ActionButton disabled={hasCopiedText} onClick={() => copyToClipboard(text)}>
                        {hasCopiedText ? 'Letter copied!' : 'Copy to clipboard'}
                        <CopyIcon />
                    </ActionButton>
                )}
            </Box>
        </Card>
    );
};
