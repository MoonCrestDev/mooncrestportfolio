import React, { createContext, useContext, useState } from "react";
import {Nav} from "../types/nav.ts";

type HoverContextType = {
    hoveredComponent: typeof Nav[keyof typeof Nav] | null;
    setHoveredComponent: (component: typeof Nav[keyof typeof Nav] | null) => void;
};

const HoverContext = createContext<HoverContextType | undefined>(undefined);

export const HoverProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [hoveredComponent, setHoveredComponent] = useState<typeof Nav[keyof typeof Nav] | null>(null);

    return (
        <HoverContext.Provider value={{ hoveredComponent, setHoveredComponent }}>
            {children}
        </HoverContext.Provider>
    );
};

export const useHoverContext = () => {
    const context = useContext(HoverContext);
    if (!context) throw new Error("useHoverContext must be used within a HoverProvider");
    return context;
};
