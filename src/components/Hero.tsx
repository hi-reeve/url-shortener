import React from "react";
import style from "@/components/Hero.module.scss";
import IllustrationWorking from "@/assets/images/illustration-working.svg";
import Button from "@/components/Button";
const Hero = () => {
    return (
        <div className={style.hero}>
            <div className={style.hero__left}>
                <h1 className={style.hero__title}>
                    More than just shorter links
                </h1>
                <p className={style.hero__desc}>
                    Build your brand’s recognition and get detailed insights on
                    how your links are performing.
                </p>
                <Button>Get Started</Button>
            </div>
            <div className={style.hero__right}>
                <img src={IllustrationWorking} />
            </div>
        </div>
    );
};

export default Hero;
