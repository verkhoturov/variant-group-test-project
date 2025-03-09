import styles from './index.module.scss';

interface PageContainerProps {
    children: React.ReactNode;
}

export const PageContainer = ({ children }: PageContainerProps) => {
    return <div className={styles.page}>{children}</div>;
};
