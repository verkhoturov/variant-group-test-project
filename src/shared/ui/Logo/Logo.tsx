import Link from 'next/link';
import Image from 'next/image';
import logoImg from './logo.svg';

export const Logo = () => {
    return (
        <Link href="/">
            <Image src={logoImg.src} width={179} height={48} alt="logo" />
        </Link>
    );
};
