import type { AppProps } from 'next/app';
import clsx from 'clsx';
import { FixelDisplay, FixelText } from '@/shared/fonts';
import { Providers } from './providers';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Providers>
            <div className={clsx(FixelDisplay.className, FixelText.className)}>
                <Component {...pageProps} />
            </div>
        </Providers>
    );
}
