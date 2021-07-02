import React from "react";
import style from "@/components/HomeSection2.module.scss";
import UrlForm from "@/components/UrlForm";
import { useContext } from "react";
import { AppContext } from "@/store/AppContext";
import LinkList from "./LinkList";
import Statistic from "./Statistic";
import type { Statistic as TStatistic } from "@/types/Statistic";
import StatisticCard from "./StatisticCard";
import { nanoid } from "nanoid";
import IconBrandRecognition from "@/assets/images/icon-brand-recognition.svg";
import IconDetailedRecords from "@/assets/images/icon-detailed-records.svg";
import IconFullyCustomizable from "@/assets/images/icon-fully-customizable.svg";
const HomeSection2 = () => {
    const appContext = useContext(AppContext);

    const statistic: TStatistic[] = [
        {
            id: nanoid(),
            title: "Brand Recognition",
            description:
                "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
            icon: IconBrandRecognition,
        },
        {
            id: nanoid(),
            title: "Detailed Records",
            description:
                "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
            icon: IconDetailedRecords,
        },
        {
            id: nanoid(),
            title: "Fully Customizable",
            description:
                "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
            icon: IconFullyCustomizable,
        },
    ];
    return (
        <div className={style.section__2}>
            <UrlForm />
            {appContext.shortenUrl.length > 0 && (
                <div className={style.link__wrapper}>
                    {appContext.shortenUrl.map(url => (
                        <LinkList url={url} key={url.id} />
                    ))}
                </div>
            )}

            <Statistic />
            <div className={style["statistic-card-wrapper"]}>
                {statistic.map(stats => (
                    <StatisticCard statistic={stats} key={stats.id} />
                ))}
            </div>
        </div>
    );
};

export default HomeSection2;
