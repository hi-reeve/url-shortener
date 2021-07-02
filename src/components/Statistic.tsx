import React from "react";
import style from "@/components/Statistic.module.scss";
const Statistic = () => {
    return (
        <div className={style.statistic}>
            <h3 className={style["statistic__section-title"]}>Advanced Statistics</h3>
			<p className={style["statistic__section-desc"] }>
                Track how your links are performing across the web with our
                advanced statistics dashboard.
            </p>
        </div>
    );
};

export default Statistic;
