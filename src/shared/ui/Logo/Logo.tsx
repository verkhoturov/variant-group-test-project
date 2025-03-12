import Link from 'next/link';
import { LogoIcon } from '../Icons';

export const Logo = () => {
    return (
        <Link href="/">
            <LogoIcon />
        </Link>
    );
};
