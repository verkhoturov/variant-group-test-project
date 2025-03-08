import { Card, Button } from '@/shared/ui';
import { useCopyToClipboard } from '@uidotdev/usehooks';

interface LetterProps {
    text: string;
    removeLetter?: () => void;
}

export const Letter = ({ text, removeLetter }: LetterProps) => {
    const [copiedText, copyToClipboard] = useCopyToClipboard();
    const hasCopiedText = Boolean(copiedText);

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
