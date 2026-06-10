import styles from './Button.module.scss'
import {ButtonHTMLAttributes, ReactNode} from "react";
import clsx from "clsx";

type ButtonVariants = 'default' | 'primary' | 'primary_fill'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children?: ReactNode;
    variant?: ButtonVariants;
}

function Button({children, className, variant = 'default', ...props}: IButtonProps ) {
    return (
        <button
            className={clsx(styles.btn, styles[variant], (className || ''))}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;