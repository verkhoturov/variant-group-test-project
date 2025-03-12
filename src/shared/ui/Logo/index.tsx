import Link from 'next/link';
import { LogoIcon } from './icons';

export const Logo = () => {
    return (
        <Link href="/">
            <LogoIcon />
        </Link>
    );
};
