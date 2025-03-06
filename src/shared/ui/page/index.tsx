import styles from './index.module.scss';

interface PageProps {
    children: React.ReactNode;
}

export const Page = ({ children }: PageProps) => {
    return <main className={styles.page}>{children}</main>;
};
