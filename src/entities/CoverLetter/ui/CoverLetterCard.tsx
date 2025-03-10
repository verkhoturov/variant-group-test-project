import { Card, Button } from '@/shared/ui';
import { useCopyToClipboard } from '@uidotdev/usehooks';

interface CoverLetterProps {
    text: string | undefined;
    isLoading?: boolean;
    removeLetter?: () => void;
}

export const CoverLetterCard = ({ text, isLoading, removeLetter }: CoverLetterProps) => {
    const [copiedText, copyToClipboard] = useCopyToClipboard();
    const hasCopiedText = Boolean(copiedText);

    if (isLoading) {
        return <Card>Loading...</Card>;
    }

    return (
        <Card>
            {text ? text : 'Your personalized job application will appear here...'}

            {removeLetter && (
                <Button className="link" onClick={removeLetter}>
                    Remove
                </Button>
            )}

            {text && (
                <Button
                    disabled={hasCopiedText}
                    className="link"
                    onClick={() => copyToClipboard(text)}
                >
                    {hasCopiedText ? 'Letter copied!' : 'Copy to clipboard'}
                </Button>
            )}
        </Card>
    );
};
