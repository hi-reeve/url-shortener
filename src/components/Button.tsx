import React from "react";
import style from "@/components/Button.module.scss";

type Props = {
    isRounded: boolean;
    className?: string;
    disabled?: boolean;
    onClick?: React.MouseEventHandler;
};
const Button: React.FC<Props> = ({
    children,
    isRounded = true,
    className,
    disabled,
    onClick,
}) => {
    const classes = [
        style.button,
        isRounded ? "rounded-full" : "rounded",
        className,
    ];
    return (
        <button
            disabled={disabled}
            className={classes.join(" ")}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
