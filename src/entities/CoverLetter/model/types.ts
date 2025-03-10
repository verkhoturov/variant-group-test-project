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
    type: string;
    param: string | null;
    code: string | null;
}
