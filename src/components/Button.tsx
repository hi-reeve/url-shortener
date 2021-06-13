import React from "react";
import style from "@/components/Button.module.scss";
const Button: React.FC = ({ children }) => {
    return <button className={style.button}>{children}</button>;
};

export default Button;
