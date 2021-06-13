import React, { useEffect, useState } from "react";
import style from "@/components/Navbar.module.scss";
import Logo from "@/assets/images/logo.svg";
import { Transition } from "@headlessui/react";
import useMediaQuery from "@/hooks/useMediaQuery";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const isMobile = useMediaQuery(1024);
    useEffect(() => {
        if (!isMobile) setIsOpen(true);
        else setIsOpen(false);
    }, [isMobile]);
    return (
        <nav className={style.nav}>
            <div>
                <img src={Logo} />
            </div>
            <div
                className={style.nav__toggle}
                onClick={() => setIsOpen(open => !open)}
            >
                <div></div>
                <div></div>
                <div></div>
            </div>
            <Transition
                as={React.Fragment}
                show={isOpen}
                enter="transition-all ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-all ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className={style.nav__menu}>
                    <div className={style["nav__menu-left"]}>
                        <div className={style.nav__link}>Features</div>
                        <div className={style.nav__link}>Pricing</div>
                        <div className={style.nav__link}>Resources</div>
                    </div>
                    <div className={style["nav__menu-right"]}>
                        <div className={style.nav__link}>Login</div>
                        <div
                            className={[
                                style.nav__link,
                                style["nav__link--signup"],
                            ].join(" ")}
                        >
                            Sign Up
                        </div>
                    </div>
                </div>
            </Transition>
        </nav>
    );
};

export default Navbar;
