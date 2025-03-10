import type { AppProps } from 'next/app';
import clsx from 'clsx';
import { fixelDisplayFont, fixelTextFont } from '@/shared/fonts';
import { Providers } from './providers';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Providers>
            <div className={clsx(fixelDisplayFont.className, fixelTextFont.className)}>
                <Component {...pageProps} />
            </div>
        </Providers>
    );
}
