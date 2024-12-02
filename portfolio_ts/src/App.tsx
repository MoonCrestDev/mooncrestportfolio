import React from "react";
import {Skills} from "./components/structure/Skills.tsx";
import {TopText} from "./components/structure/TopText.tsx";
import {HoverProvider} from "./hooks/useHoverContext.tsx";
import {Projects} from "./components/structure/Projects.tsx";
import {TopBar} from "./components/structure/TopBar.tsx";

const App: React.FC = () => {
    return (
        <HoverProvider>
            <div className="flex flex-col w-full space-y-8 p-4 md:p-8">
                <TopBar/>
                <TopText/>
                <Skills/>
                <Projects/>
            </div>
        </HoverProvider>
    );
};

export default App;
