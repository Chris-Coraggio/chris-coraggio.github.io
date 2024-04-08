import React, { createContext, PropsWithChildren } from 'react';
import { useMediaQuery } from 'react-responsive';
import { TABLET_BREAKPOINT } from '../constants';

const DesktopContext = createContext(false);

export const DesktopContextProvider = ({ children }: PropsWithChildren) => {
    const isDesktop = useMediaQuery({
        query: `(min-width: ${TABLET_BREAKPOINT})`
    })
    return (
        <DesktopContext.Provider value={isDesktop}>
            {children}
        </DesktopContext.Provider>
    );
};

export default DesktopContext;
