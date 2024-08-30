import React, { createContext, useContext, useState } from 'react';

export const AppScreensContext = createContext({
    navigationReady: false,
    setNavigationReady: (ready: boolean) => { },
});

export const AppScreensProvider = ({ children }: { children: React.ReactNode }) => {
    const [navigationReady, setNavigationReady] = useState(false);

    return (
        <AppScreensContext.Provider value={{ navigationReady, setNavigationReady }}>
            {children}
        </AppScreensContext.Provider>
    );
};

export const useAppScreens = () => useContext(AppScreensContext);
