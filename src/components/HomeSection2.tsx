import React from "react";
import style from "@/components/HomeSection2.module.scss";
import UrlForm from "@/components/UrlForm";
import { useContext } from "react";
import { AppContext } from "@/store/AppContext";
import Button from "@/components/Button";
import { useState } from "react";
const HomeSection2 = () => {
    const appContext = useContext(AppContext);

    const [copiedId, setCopiedId] = useState<string | null>(null);
    const [isCopied, setIsCopied] = useState<boolean>(false);
    const copyToClipboard = (id: string) => {
        const copiedUrl = appContext.shortenUrl.find(url => url.id === id);
        if (copiedUrl) {
            navigator.clipboard
                .writeText(copiedUrl.fullShortenUrl)
                .then(() => {
                    setCopiedId(id);
                    setIsCopied(true);
                    setTimeout(() => {
                        setCopiedId(null);
                        setIsCopied(false);
                    }, 2000);
                })
                .catch(err =>
                    alert("there is an error while copied the link, " + err)
                );
        }
    };
    return (
        <div className={style.section__2}>
            <UrlForm />
            {appContext.shortenUrl.length > 0 && (
                <ul className="mt-5">
                    {appContext.shortenUrl.map(url => (
                        <li
                            key={url.id}
                            className="flex md:flex-row flex-col rounded  bg-white  my-2 md:items-center"
                        >
                            <div
                                className="p-4 max-w-[100%] truncate "
                                title={url.originalUrl}
                            >
                                {url.originalUrl}
                            </div>
                            <div className="h-[1px] md:hidden block bg-custom-gray w-full"></div>
                            <div className="p-4 md:ml-auto">
                                <span className="text-custom-cyan ">
                                    {url.shortenUrl}
                                </span>
                                <Button
                                    isRounded={false}
                                    className={`md:ml-3 md:mt-0 mt-5 md:w-auto w-full ${
                                        isCopied && copiedId === url.id
                                            ? "!bg-violet-dark"
                                            : ""
                                    }`}
                                    onClick={() => {
                                        copyToClipboard(url.id);
                                    }}
                                >
                                    {isCopied && copiedId === url.id
                                        ? "Copied!"
                                        : "Copy"}
                                </Button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default HomeSection2;
