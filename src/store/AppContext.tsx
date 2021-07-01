import useLocalStorage from "@/hooks/useLocalStorage";
import { LocalShortenUrl } from "@/types/ShortenUrl";
import React from "react";
import { createContext } from "react";

export interface IAppContextState {
    shortenUrl: LocalShortenUrl[];
    SET_STATE: (state: LocalShortenUrl) => void;
}

const initialState: IAppContextState = {
    shortenUrl: [],
    SET_STATE: () => {},
};

export const AppContext: React.Context<IAppContextState> =
    createContext<IAppContextState>(initialState);

const AppContextProvider: React.FC = ({ children }) => {
    const [shortenUrl, setShortenUrl] = useLocalStorage<LocalShortenUrl[]>(
        "shortenurl",
        []
    );

    const SET_STATE = (newUrl: LocalShortenUrl) => {
        setShortenUrl(val => [...val, newUrl]);
    };
    return (
        <AppContext.Provider
            value={{
                shortenUrl,
                SET_STATE,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
