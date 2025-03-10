import localFont from 'next/font/local';

export const fixelDisplayFont = localFont({
    src: [{ path: './FixelDisplay-Bold.woff2', weight: '600', style: 'normal' }],
});

export const fixelTextFont = localFont({
    src: [
        { path: './FixelText-Bold.woff2', weight: '600', style: 'normal' },
        { path: './FixelText-Medium.woff2', weight: '500', style: 'normal' },
        { path: './FixelText-Regular.woff2', weight: '400', style: 'normal' },
    ],
});
