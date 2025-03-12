import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en" suppressHydrationWarning>
            <Head>
                <script crossOrigin="anonymous" src="//unpkg.com/react-scan/dist/auto.global.js" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
