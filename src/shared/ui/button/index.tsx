import { Button as UIButton, ButtonProps } from '@chakra-ui/react';
import styles from './index.module.scss';

export const Button = ({ children, ...props }: ButtonProps) => {
    return (
        <UIButton className={styles.button} size="lg" {...props}>
            {children}
        </UIButton>
    );
};
