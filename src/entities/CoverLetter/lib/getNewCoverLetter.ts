import { v4 as uuid } from 'uuid';

export const getNewCoverLetter = ({
    companyName,
    jobTitle,
    skillsList,
    details,
}: {
    companyName: string;
    jobTitle: string;
    skillsList: string;
    details: string;
}) => ({
    id: uuid(),
    text: `
Dear ${companyName} Team,

I am writing to express my interest in the ${jobTitle} position.

My experience in the realm combined with my skills in ${skillsList} make me a strong candidate for this role.

${details}

I am confident that my skills and enthusiasm would translate into valuable contributions to your esteemed organization.

Thank you for considering my application. I eagerly await the opportunity to discuss my qualifications further.
`,
});
