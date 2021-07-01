import React, { useState } from "react";
import style from "@/components/UrlForm.module.scss";
import Button from "./Button";
import { useMemo } from "react";
import { nanoid } from "nanoid";
import { LocalShortenUrl, ShortenURL } from "@/types/ShortenUrl";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useContext } from "react";
import { AppContext } from "@/store/AppContext";
type Props = {};

const UrlForm: React.FC<Props> = ({}) => {
    const [link, setLink] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [, setLocalUrl] = useLocalStorage<LocalShortenUrl[]>(
        "shortenurl",
        []
    );
    const [loading, setLoading] = useState<boolean>(false);
    const appContext = useContext(AppContext);
    const urlPattern = useMemo<RegExp>(
        () =>
            new RegExp(
                /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
            ),
        []
    );

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (error) setError("");

        if (!link) {
            setError("Please input a link");
            return;
        }

        if (!urlPattern.test(link)) {
            setError("Please insert a valid url");
            return;
        }

        try {
            setLoading(true);
            const response = await fetch(
                `https://api.shrtco.de/v2/shorten?url=${link}`
            );
            if (response.ok) {
                const data: ShortenURL = await response.json();

                const formedData = {
                    id: nanoid(),
                    originalUrl: data.result.original_link,
                    shortenUrl: data.result.short_link,
                    fullShortenUrl: data.result.full_short_link,
                };

                setLocalUrl(oldVal => {
                    if (oldVal) return [...oldVal, formedData];
                    else return [formedData];
                });
                appContext.SET_STATE(formedData);

                setLink("");
            }
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className={style["url-form"]}>
            <form onSubmit={handleSubmit} className={style["url-form__form"]}>
                <div className="flex flex-col w-full">
                    <input
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            if (error) setError("");
                            setLink(e.target.value);
						}}
						disabled={loading}
                        value={link}
                        type="text"
                        className={`${style["url-form__input"]} ${
                            error
                                ? "border-2 placeholder-custom-red border-custom-red"
                                : ""
                        }`}
                        placeholder="Shorten a link here..."
                    />
                    {error && (
                        <span className="text-custom-red text-sm mt-3">
                            {error}
                        </span>
                    )}
                </div>
                <Button
                    isRounded={false}
                    className="md:w-max md:min-w-[200px] flex-[.25 1 0%] md:h-16 w-full md:mt-0 mt-4 md:ml-4"
                    disabled={loading}
                >
                    {loading ? "Generating Short Url..." : "Shorten it!"}
                </Button>
            </form>
        </div>
    );
};

export default UrlForm;
