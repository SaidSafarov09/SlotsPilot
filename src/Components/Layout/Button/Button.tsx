import React from "react";
import styles from "./button.module.scss";

type ButtonProps = {
    color: string
    buttonText?: string
}

export const Button = ({
    color,
    buttonText,
}: ButtonProps) => {
    return (
        <button 
        style={{backgroundColor: color}}
        className={styles.btn}
        >
            {buttonText}
        </button>
    )
}