export interface CoverLetter {
    id: string;
    text: string;
}

export interface CoverLetterRequestParams {
    jobTitle: string;
    companyName: string;
    skillsList: string;
    details: string;
}

export interface CoverLetterResponseError {
    message: string;
    code: string | null;
}
