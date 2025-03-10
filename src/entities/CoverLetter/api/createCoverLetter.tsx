import { CoverLetter, CoverLetterRequestParams, CoverLetterResponseError } from '../model';

export const createCoverLetter = async (params: CoverLetterRequestParams): Promise<CoverLetter> => {
    const res = await fetch('/api/openai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ params }),
    });

    const data: CoverLetter | CoverLetterResponseError = await res.json();

    if (!res.ok && 'message' in data)
        throw new Error(data.message || 'Failed to fetch response from OpenAI');

    return data as CoverLetter;
};
