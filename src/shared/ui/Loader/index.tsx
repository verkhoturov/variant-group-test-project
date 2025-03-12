import styles from './index.module.scss';

export const Loader = () => {
    return (
        <div className={styles.loader}>
            <div className={styles.circle}></div>
        </div>
    );
};
