import { AppContext } from "@/store/AppContext";
import { LocalShortenUrl } from "@/types/ShortenUrl";
import React, { useContext, useState } from "react";
import Button from "./Button";
import style from "@/components/LinkList.module.scss";
type Props = {
    url: LocalShortenUrl;
};
const LinkList: React.FC<Props> = ({ url }) => {
    const appContext = useContext(AppContext);
    const [copiedId, setCopiedId] = useState<string | null>(null);
    const [isCopied, setIsCopied] = useState<boolean>(false);
    const copyToClipboard = async (id: string) => {
        const copiedUrl = appContext.shortenUrl.find(url => url.id === id);
        if (copiedUrl) {
            try {
                await navigator.clipboard.writeText(copiedUrl.fullShortenUrl);
                setCopiedId(id);
                setIsCopied(true);
                setTimeout(() => {
                    setCopiedId(null);
                    setIsCopied(false);
                }, 2000);
            } catch (error) {
                alert("there is an error while copied the link, " + error);
            }
        }
    };
    return (
        <div className={style.links}>
            <div
                className={style["links__original-url"]}
                title={url.originalUrl}
            >
                {url.originalUrl}
            </div>
            <div className={style.links__divider}></div>
            <div className={style["links__cta-wrapper"]}>
                <span className={style["links__shorten-url"]}>
                    {url.shortenUrl}
                </span>
                <Button
                    isRounded={false}
                    className={`${style["links__copy-cta"]} ${
                        isCopied && copiedId === url.id ? "!bg-violet-dark" : ""
                    }`}
                    onClick={() => {
                        copyToClipboard(url.id);
                    }}
                >
                    {isCopied && copiedId === url.id ? "Copied!" : "Copy"}
                </Button>
            </div>
        </div>
    );
};

export default LinkList;
