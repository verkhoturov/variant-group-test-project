import localFont from 'next/font/local';

export const FixelDisplay = localFont({
    src: [{ path: './FixelDisplay-Bold.woff2' }],
});

export const FixelText = localFont({
    src: [
        { path: './FixelText-Bold.woff2' },
        { path: './FixelText-Medium.woff2' },
        { path: './FixelText-Regular.woff2' },
    ],
});
