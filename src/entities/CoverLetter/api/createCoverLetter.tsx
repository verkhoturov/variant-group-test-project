import { CoverLetter, CoverLetterRequestParams, CoverLetterResponseError } from '../model';

export const createCoverLetter = async (params: CoverLetterRequestParams): Promise<CoverLetter> => {
    const res = await fetch('/api/openai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ params }),
    });

    const data: CoverLetter | CoverLetterResponseError = await res.json();

    if (!res.ok && 'code' in data)
        throw new Error(data.code || 'Failed to fetch response from OpenAI');

    return data as CoverLetter;
};
