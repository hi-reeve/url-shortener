import React from "react";
import style from "@/components/BoostLink.module.scss";
import Button from "./Button";
const BoostLink = () => {
	return <div className={style["boost-link"]}>
		<h1 className={style["boost-link__title"] }>Boost your links today</h1>
		<Button isRounded className="w-[250px]">Get Started</Button>
	</div>;
};

export default BoostLink;
