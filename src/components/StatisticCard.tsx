import React from "react";
import style from "@/components/StatisticCard.module.scss";
import { Statistic } from "@/types/Statistic";
type Props = {
    statistic: Statistic;
};
const StatisticCard: React.FC<Props> = ({ statistic }) => {
    return (
        <div className={style["statistic-card"]}>
            <div className={style["statistic-card__icon-wrapper"]}>
                <img
                    src={statistic.icon}
                    className={style["statistic-card__icon"]}
                />
            </div>
            <h4 className={style["statistic-card__title"]}>
                {statistic.title}
            </h4>
            <p className={style["statistic-card__desc"]}>
                {statistic.description}
            </p>
        </div>
    );
};

export default StatisticCard;
